#!/bin/bash
echo This script will automatically set up Caddy, NodeJS, and PM2 for you.
echo If it prompts for a password, please enter your password.
echo You must do the rest though, such as setting up the Caddy configuration, installing and setting up the pm2 app.
read -n 1 -s -r -p "Press any key to continue.."

echo ""
echo Doing system updates
echo ""
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y git

echo ""
echo Remove pre-existing web servers that can conflict with Caddy
echo ""
sudo apt remove -y nginx apache2

echo ""
echo Installing Caddy
echo ""
# https://caddyserver.com/docs/install#debian-ubuntu-raspbian
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install -y caddy

echo ""
echo Installing Node Version Manager
echo ""
# https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc

echo ""
echo Installing the latest NodeJS LTS release
echo ""
nvm install --lts

echo ""
echo Installing PM2
echo ""
npm install pm2 -g

ip=ip route get 8.8.8.8 | awk -F"src " 'NR==1{split($2,a," ");print a[1]}'
echo "If you open http://$ip in your browser, you should now see the Caddy default page."
echo To clone your GitHub repo, please enter the URL below:
read repo

echo Cloning your GitHub repository.
cd ~
git clone --depth 1 $repo
cd "$(basename "$repo" .git)"
