const graphModule = require('@arangodb/general-graph');

// First, drop the existing graph if it exists
try {
  graphModule._drop('connecxit_graph', true);
  console.log('Dropped existing graph: connecxit_graph');
} catch (e) {
  console.log('No existing graph to drop');
}

// Define the edge definitions
const edgeDefinitions = [
  {
    collection: "booked_by",
    from: ["users"],
    to: ["events"]
  },
  {
    collection: "hires",
    from: ["users"],
    to: ["vendors"]
  },
  {
    collection: "has_service",
    from: ["vendors"],
    to: ["services"]
  },
  {
    collection: "plans_event",
    from: ["event_planners"],
    to: ["events"]
  },
  {
    collection: "vendor_for",
    from: ["vendors"],
    to: ["events"]
  },
  {
    collection: "leaves_review",
    from: ["users"],
    to: ["reviews"]
  },
  {
    collection: "reviewed_by",
    from: ["reviews"],
    to: ["vendors"]
  },
  {
    collection: "reviewed_by_planner",
    from: ["reviews"],
    to: ["event_planners"]
  },
  {
    collection: "located_in",
    from: ["users"],
    to: ["locations"]
  }
];

// Create the graph
const graph = graphModule._create("connecxit_graph", edgeDefinitions, [], {waitForSync: true});
console.log('Created graph: connecxit_graph');

// Show the graph structure
console.log('\nGraph Structure:');
console.log('Collections and their relationships:');

edgeDefinitions.forEach(def => {
    console.log(`\nEdge Collection: ${def.collection}`);
    console.log(`  From: ${def.from.join(', ')}`);
    console.log(`  To: ${def.to.join(', ')}`);
    const count = db._collection(def.collection).count();
    console.log(`  Count: ${count} edges`);
});

// Show some statistics about vertex collections
console.log('\nVertex Collections:');
const vertexCollections = new Set([
    ...edgeDefinitions.flatMap(def => [...def.from, ...def.to])
]);

vertexCollections.forEach(collection => {
    const count = db._collection(collection).count();
    console.log(`- ${collection} (${count} documents)`);
});

// Show a sample path through the graph
const query = `
LET start = FIRST(FOR u IN users LIMIT 1 RETURN u)
FOR v, e, p IN 1..3 OUTBOUND start._id
    GRAPH 'connecxit_graph'
    LIMIT 5
    RETURN {
        path: (
            FOR vertex IN p.vertices
            RETURN {
                collection: PARSE_IDENTIFIER(vertex._id).collection,
                name: vertex.name || vertex.type || vertex.category || 'unnamed'
            }
        ),
        connections: (
            FOR edge IN p.edges
            RETURN {
                from: PARSE_IDENTIFIER(edge._from).collection,
                to: PARSE_IDENTIFIER(edge._to).collection,
                type: PARSE_IDENTIFIER(edge._id).collection
            }
        )
    }`;

const queryResult = db._query(query);
console.log('\nSample Paths:');
console.log(JSON.stringify(queryResult.toArray(), null, 2));
