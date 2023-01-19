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

RUN chown -R node:node .
RUN mkdir $APP_HOME/node_modules
RUN chown -R node:node $APP_HOME/node_modules

RUN echo "WORKDIR is $WORKDIR . HOME is $HOME . LANG is $LANG ." && npm config list


###############
#     dev     #
###############
FROM base as dev
ENV NODE_ENV=development


###############
#     test    #
###############
FROM dev as test
ENV NODE_ENV=test

RUN npm ci


###############
#    build    #
###############
FROM test as build

ARG _ENV="develop"

COPY --chown=node . .

RUN npm run build:${_ENV}



###############
#    prod     #
###############
FROM base as prod
ENV NODE_ENV=production

COPY --from=build /$APP_HOME/.next ./.next
COPY --from=build /$APP_HOME/next.config.js ./next.config.js
COPY --from=build /$APP_HOME/public ./public

RUN npm ci --only=production \
    && npm cache clean --force

USER node

EXPOSE 3001

# アプリ実行コマンド
CMD ["node_modules/.bin/next", "start","-p","3001"]