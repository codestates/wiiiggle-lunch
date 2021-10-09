#!/bin/bash
cd /home/ubuntu/wiiiggle-lunch/server

# database env
export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME = $(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')
# google env
export OAUTH_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names OAUTH_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export OAUTH_CLIENT_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names OAUTH_CLIENT_PASSWORD --query Parameters[0].Value | sed 's/"//g')

# s3 env

authbind --deep pm2 start index.js