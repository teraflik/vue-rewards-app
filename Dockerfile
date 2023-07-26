FROM node:20.5.0-alpine

WORKDIR /app

COPY . .

RUN set -eux; \
  npm install; \
  npm run build

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs"]