FROM node:latest

WORKDIR /app

COPY ["package.json", "package-lock.json", "/app/"]

RUN npm install

COPY [".", "/app/"]

EXPOSE 4000

CMD ["npm", "run", "serve"]