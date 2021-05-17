FROM alpine

#autor de la imagen
MAINTAINER Humberto Navarro

#corre el comando para actualizar alpine dentro del contenedor
RUN apk update

#corre el comando para descargar bash y ver que pasaba dentro del contenedor
RUN apk add --no-cache bash

#corre el comando para descargar nodejs al contenedor
RUN apk add --no-cache nodejs

#copia el archivo principal a una nueva carpeta app dentro del contenedor
COPY ./app.js /app/

#copia los archivos de la carpeta en una nueva carpeta dentro del contenedor
COPY ./* /app/

#basicamente es el comando node app.js que normalmente utilizamos
CMD ["/usr/bin/node", "/app/app.js"]

#abre el puerto 8888
EXPOSE 8888
