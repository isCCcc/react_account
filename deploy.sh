#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:isCCcc/react_account-website.git &&
git push -u origin master -f
cd -
echo "https://iscccc.github.io/react_account_website/"