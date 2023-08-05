FROM node:17-alpine

WORKDIR /Inked

COPY package.json .

RUN npm install

COPY . .

EXPOSE 19000

CMD ["npx", "expo", "start", "--tunnel"]