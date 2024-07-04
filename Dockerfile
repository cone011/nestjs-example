FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start:dev" ]

# Para usar en produccion

# RUN yarn build

# CMD ["node", "dist/main"]