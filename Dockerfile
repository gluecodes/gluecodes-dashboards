FROM node:14

WORKDIR /src/gluecodes-dashboards
ADD . /src/gluecodes-dashboards

RUN yarn install
