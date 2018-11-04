#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# add custom domain
echo 'kelly-tran.com' >> CNAME
echo 'www.kelly-tran.com' >> CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:kellybelly/kellybelly.github.io.git master

cd -