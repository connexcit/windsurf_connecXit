#!/bin/bash

function switch_github() {
    local account=$1
    
    if [ -z "$account" ]; then
        echo "Please specify a GitHub account (personal, connexcit, wickent, tdablove)"
        return 1
    fi
    
    case $account in
        "personal")
            git config user.name "tdaentbluv"
            git config user.email "tdaentbluv@gmail.com"
            ;;
        "connexcit")
            git config user.name "connexcit"
            git config user.email "tdaentbluv@gmail.com"
            git remote set-url origin "git@github.com-connexcit:connexcit/windsurf_connecXit.git"
            ;;
        "wickent")
            git config user.name "wickent"
            git config user.email "tdaentbluv@gmail.com"
            ;;
        "tdablove")
            git config user.name "tdablove"
            git config user.email "tdaentbluv@gmail.com"
            ;;
        *)
            echo "Unknown account: $account"
            echo "Please use one of: personal, connexcit, wickent, tdablove"
            return 1
            ;;
    esac
    
    echo "Switched to GitHub account: $account"
    echo "Current Git config:"
    git config --list | grep "user\."
}

# If script is sourced, define the function
# If script is run directly, execute with arguments
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    switch_github "$@"
fi
