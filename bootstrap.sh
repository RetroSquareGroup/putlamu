#!/usr/bin/env bash

# setup directory stuff
mkdir /var/www
ln -fs /vagrant /var/www/putlamu
cd /var/www/putlamu

echo "===================================="
echo "Updating sources..."
echo "===================================="
apt-get update

# install git
echo "===================================="
echo "Installing git..."
echo "===================================="
apt-get install -y git

# install nodejs
echo "===================================="
echo "Installing nodejs..."
echo "===================================="
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install -y nodejs

echo "===================================="
echo "Installing node dependencies..."
echo "===================================="
npm install

# install bower
echo "===================================="
echo "Installing webpack..."
echo "===================================="
npm install -g webpack

# install pm2
echo "===================================="
echo "Installing pm2..."
echo "===================================="
npm install -g pm2

# install grunt-cli
echo "===================================="
echo "Installing grunt..."
echo "===================================="
npm install -g grunt-cli

# update files
echo "===================================="
echo "Build website..."
echo "===================================="
grunt copy:site
webpack

# start server
echo "===================================="
echo "Starting website..."
echo "===================================="
npm run startserver
