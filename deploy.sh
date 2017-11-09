#!/bin/sh
# Before deploy, you need to configure Firebase on your computer.
# https://firebase.google.com/docs/cli
# Configure your project with
# firebase init
# Then you can run this script
npm run build
firebase deploy
