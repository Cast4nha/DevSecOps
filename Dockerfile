FROM node:18.7.0
COPY package.json .
COPY src/ src/
WORKDIR /src
RUN npm install
COPY . .
CMD [ "node", "index.js" ]