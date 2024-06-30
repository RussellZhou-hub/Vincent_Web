echo "Switching to branch master"
git checkout main
echo "building app..."
npm run build

echo "Deploying files to server..."
# scp -r build/* root@101.132.166.210:/usr/local/nginx/html/
scp -r build/* root@139.224.118.39:/usr/local/nginx/html/

echo "Done!"
echo "If not show correct in browser, You may have to restart nginx service on server!"