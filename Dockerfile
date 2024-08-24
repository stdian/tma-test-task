FROM alpine:latest

RUN apk update
RUN apk add nodejs npm

WORKDIR /tma-test-task

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./public ./public
COPY ./src ./src
COPY ./index.html ./
COPY ./tsconfig.json ./
COPY ./tsconfig.node.json ./
COPY ./tsconfig.app.json ./
COPY ./vite.config.ts ./
COPY ./serve.js ./

RUN npm install
RUN npm run build:prod

EXPOSE 8080
CMD ["npm", "run", "serve"]
