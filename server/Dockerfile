FROM node:23
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
RUN npm run build
CMD ["npm", "start"] 