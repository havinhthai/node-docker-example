#!/bin/bash
docker stop nodeapp
docker rm nodeapp
docker build -t nodeapp .
docker run --name nodeapp -d -p 3000:3000 nodeapp
sleep 1
curl http://127.0.0.1:3000
