rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@gitee.com:suizhazha/wuhu-ui-website.git
git branch -M main &&
git push -u origin main &&
cd - &&
echo https://suixin.monster/wuhu-ui-website/#/
echo https://suizhazha.gitee.io/wuhu-ui-website/#/