git push origin -d gh-pages
git branch -d gh-pages
git checkout -b gh-pages
git add -f dist
git commit -m 'fix: code style'
git subtree push --prefix dist origin gh-pages
git checkout master