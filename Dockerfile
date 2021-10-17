FROM node:16.11.1

WORKDIR /app

RUN yarn init -y && yarn add -D vuepress && yarn

CMD yarn docs:dev

EXPOSE 8080
VOLUME [ "/app" ]
