FROM node:latest

WORKDIR /app

COPY ["package.json", "/app/"]

ENV NEXTJS_APP_REST=/api

RUN npm install

COPY [".", "/app/"]

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]


