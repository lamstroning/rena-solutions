# pull official base image
FROM node:10.21.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm install

# add source code
COPY . .

CMD ["npm", "start"]