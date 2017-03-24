echo "Commiting to git..."
 
git add Client
 

git commit -a -m 'Server commit by bash script...'

echo "pushing to github..."
git push -u origin master

