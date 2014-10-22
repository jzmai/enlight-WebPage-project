HTML-enlight-project
====================

Web page to control the Maquina fountain

If you are part of Enlight, and interested in this project, please speak to blockerdude about getting permission to push to the master.

Please also fork your own version to modify/screw around with before making changes to the master upstream branch.

Setup using the shell:
Create a git account and install git
fork blockerdude's enlight-webPage-project repository
open the shell
navigate to where you want your repo

git clone https://github.com/YOURUSERNAME/enlight-webPage-project.git

cd enlight-webPage-project

git remote add upstream https://github.com/blockerdude/enlight-webPage-project.git

ta-da~


Quick Reference:
To add to commit list:
git add FILENAME
To remove:
git rm FILENAME
To commit
git commit -m "Description of changes here"
To push to your local master fork:
git push origin master
To push to the upstream master:
git push upstream master

To merge your master with updates from upstream
git merge upstream/master
To fetch changes from master to local
git fetch origin master

To see remotes:
git remote -v
