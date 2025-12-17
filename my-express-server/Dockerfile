FROM node:18-alpine

WORKDIR /usr/src/app

# Install dependencies using npm
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

EXPOSE 8001

CMD ["npm", "start"]