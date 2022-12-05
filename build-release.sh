#!/bin/bash

docker build --no-cache -t hackinglab/alpine-nginx-nodejs-websocketd-hl:$1.0 -t hackinglab/alpine-nginx-nodejs-websocketd-hl:$1 -t hackinglab/alpine-nginx-nodejs-websocketd-hl:latest -f Dockerfile .

docker push hackinglab/alpine-nginx-nodejs-websocketd-hl
docker push hackinglab/alpine-nginx-nodejs-websocketd-hl:$1
docker push hackinglab/alpine-nginx-nodejs-websocketd-hl:$1.0

