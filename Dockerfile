FROM node:lts-alpine

#autor de la imagen
MAINTAINER Humberto Navarro

#corre el comando para actualizar alpine dentro del contenedor
RUN apk update

#corre el comando para descargar bash y ver que pasaba dentro del contenedor
RUN apk add --no-cache bash

#corre el comando para descargar nodejs al contenedor
RUN apk add --no-cache nodejs

#copia los archivos principales a una nueva carpeta app dentro del contenedor
WORKDIR /app

COPY . .

##abre el puerto 8888
EXPOSE 8888

##basicamente es el comando node app.js que normalmente utilizamos
CMD ["/usr/bin/node", "/app/app.js"]
