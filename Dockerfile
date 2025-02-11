FROM node:20.16.0-alpine3.20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci -f

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]