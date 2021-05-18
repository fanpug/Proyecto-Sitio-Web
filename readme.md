# Proyecto del Segundo Parcial | Mi Primer Sitio Web
Este repositorio fue creado para la practica en clase 3.4 de la materia de Desarrollo Basado en Plataformas por Humberto Alejandro Navarro Andujo.

## Descripción de los problemas
Utilizando los conocimientos adquiridos en la unidad, vamos a crear nuestro primer sitio web para esto toma en cuenta el siguiente problema:

Se tiene una empresa llamada “automax” de renta de autos que quiere promocionar sus unidades por internet, para esto la empresa tiene al rededor de 25 autos de los cuales cuenta con modelo, año, marca y precio por día de renta.

1. Crear un servidor web que se ejecute sobre el puerto 8888. (20 puntos)

2. Crear un sitio web que se hospede en el servidor que contenga lo siguiente:

    a) Landing page que presente a la empresa y los vehículos que tiene disponibles. (10 puntos)

    b) Pagina web de contacto con los datos para ubicar a la empresa. (10 puntos)

    c) Página web “acerca de ” con los datos de la empresa (ej. Misión, visión, etc.)  (10 puntos)

    d) Página web de detalle de los primeros 3 vehículos.  (15 puntos)

    e) Formulario de contacto que almacene en el servidor en un archivo de texto la información. (15 puntos)

3. Al terminar convierta el servidor y el sitio web en una imagen de Docker publicada en Docker hub. (20 puntos)

Entrega un repositorio en GitHub (debe contener archivo readme con los integrantes del equipo y descripción de cómo funciona) y la liga de la imagen en Docker hub. Cada miembro del equipo deberá entregar ambas ligas en su Moodle.

Puntos importantes:

 * El HTML debe estar bien escrito.

 * Se debe usar CSS para mejorar el aspecto visual del sitio web sin utilizar ningún framework como bootstrap o materialize etc.



## Prerequisitos
Para ejecutar los programas en la terminal de linux para su facil ejecucion se debe de contar con alguna version de Node.js y Docker.

A continuacion se describen los pasos para descargar e instalar los programas necesarios.


### Instalando
Para actualizar a las ultimas versiones de Node.js y Docker, se pueden utilizar los siguientes comandos:
```
sudo apt-get update
```
```
sudo apt-get upgrade
```

Para descargar e instalar Node.js se puede utilizar el siguiente comando en la terminal:
```
sudo apt-get install nodejs
```

Necesitamos instalar Docker para correr un contenedor con la imagen que contiene nuestro sitio web. Para descargar e instalar Docker se deben seguir los siguientes pasos:
1. Actualizar los paquetes APT locales con el comando
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
2. Anadir la llave GPG
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
3. Instalar el motor de docker con el comando
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```


## Corriendo pruebas
Para correr el servidor por si solo se ejecuta el siguiente comando en la terminal de linux:
```
node app.js
```
Una vez que el servidor se este ejecutando, se puede verificar que el sitio web esta activo al ir a la siguiente direccion dentro del navegador:
```
http://localhost:8888/
```
Que nos llevara a la pagina principal del sitio web.

### Docker
Repositorio de docker para descargar la [imagen](https://hub.docker.com/r/fanpug/app-sitio-web).
Para correr el servidor por medio de docker se debe ejecutar el siguiente comando para crear un contenedor con la imagen de nuestro servidor:


## Construido con
* Nano - Editor de texto
* Atom - Editor de texto
* Node.js - Entorno para ejecutar JS (EC6)


## Contribuiciones
No aceptamos contribuciones >:|


## Autores
* **Humberto Alejandro Navarro Andujo** - [Repositorio](https://github.com/fanpug)
* **Sergio Armando Rodriguez Nava** - [Repositorio](https://github.com/XKerberosX)
* **Kevin López Venegas** - [Repositorio](https://github.com/kevinlpzv)

## Licencia
El proyecto tiene libre licencia o algo asi ;)


## Agradecimientos
El profesor Luis Antonio Ramirez Martinez fue quien nos inspiro a realizar este proyecto/tarea, muchas gracias profe. Su clase es la unica chida.

Gracias a las personas de PurpleBooth por su plantilla/referencia de como debe ser el [formato de un readme](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
