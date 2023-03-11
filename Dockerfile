FROM node:18.14.2
COPY package.json .
COPY src/ src/
WORKDIR /src
RUN npm install
COPY . .
CMD [ "node", "./src/routes/index.js" ]