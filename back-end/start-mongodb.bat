@echo off
echo Starting MongoDB...
mkdir FantasyTF
mongod --dbpath=FantasyTF
:finish
pause