###############
#    base     #
###############
FROM node:16.15.0-alpine as base

ENV LANG=ja_JP.UTF-8

ENV HOME=/app
ENV APP_HOME="$HOME"

WORKDIR $APP_HOME

EXPOSE 3001

COPY package*.json ./
COPY .npmrc ./
COPY env/ ./env/

RUN chown -R node:node .
RUN mkdir $APP_HOME/node_modules
RUN chown -R node:node $APP_HOME/node_modules

RUN echo "WORKDIR is $WORKDIR . HOME is $HOME . LANG is $LANG ." && npm config list

ARG _NODE_AUTH_TOKEN
ENV __NODE_AUTH_TOKEN ${_NODE_AUTH_TOKEN}

ARG _ENV
ENV __ENV ${_ENV}


###############
#     dev     #
###############
FROM base as dev


###############
#     test    #
###############
FROM dev as test

RUN NODE_AUTH_TOKEN=$__NODE_AUTH_TOKEN npm ci


###############
#    build    #
###############
FROM test as build

COPY --chown=node . .

RUN npm run build:$__ENV



###############
#    prod     #
###############
FROM base as prod

COPY --from=build /$APP_HOME/.next ./.next
COPY --from=build /$APP_HOME/next.config.js ./next.config.js
COPY --from=build /$APP_HOME/public ./public

RUN NODE_AUTH_TOKEN=$__NODE_AUTH_TOKEN npm ci --only=production \
    && npm cache clean --force

USER node

EXPOSE 3001

# アプリ実行コマンド
CMD ["node_modules/.bin/next", "start","-p","3001"]
