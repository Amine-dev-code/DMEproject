FROM node:16.14.2-alpine

WORKDIR /build

COPY package*.json .


RUN npm ci --omit=dev&& npm cache clean --force 

COPY . .
EXPOSE 3000

CMD ["node","application"]