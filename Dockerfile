# 指定基础镜像
FROM node:10.15.0-alpine

# 移动当前目录到 app 目录下
ADD . /app

# 指定工作目录
WORKDIR /app

# 设置时区
RUN apk add --no-cache tzdata
ENV TZ Asia/Shanghai

# bash
RUN apk add --no-cache bash

# git
RUN apk add --no-cache git

# set npm registry
RUN npm config set registry https://registry.npm.taobao.org/

# 安装依赖
RUN npm i

# 构建
RUN npm run build

# 对外暴露端口
EXPOSE 8080

# 启动
CMD npm run start:prod