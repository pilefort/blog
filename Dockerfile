FROM node:16-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV production
RUN yarn build

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
