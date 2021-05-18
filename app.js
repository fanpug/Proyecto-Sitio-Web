const http = require('http'); //libreria de http
const fs = require('fs'); //libreria de file system


console.log("Servidor ejecutandose...");


http.createServer((request, response) => {
  console.log(request.url);
  const file = request.url == '/' ? "./index.html" : `.${request.url}`;

  if(request.url == '/score.html'){
      let data = "Tu puntuacion fue impresionante, tal vez!";
      fs.writeFile('./score.txt', data, (err) => {
          if (err) throw err;
      });
    }


  fs.readFile(file, (error, data) => {
    if (error) {
      response.writeHead(404, {
        "Content-Type": "text/plain"
      });
      response.write("Not Found MADAFAKA");
      response.end();
    } else {
      //si tenemos la cadena "hola.como estas" i hacemos un split de esta
      //manera "hola.como estas".split(','); va a devolver un arreglo con dos
      //pedazos: ["hola", "como estas"]. Si agregamos el .pop(): "como estas"
      const extension = file.split('.').pop();

      switch (extension) {
        case 'txt':
          response.writeHead(200, {
            "Content-Type": "text/plain"
          });
          break;

        case 'html':
          response.writeHead(200, {
            "Content-Type": "text/html"
          });
          break;

        case 'jpeg':
          response.writeHead(200, {
            "Content-Type": "image/jpeg"
          });
          break;

        case 'png':
          response.writeHead(200, {
            "Content-Type": "image/png"
          });
          break;

        case 'gif':
          response.writeHead(200, {
            "Content-Type": "image/gif"
          });
          break;

          case 'ico':
          response.writeHead(200, {
            "Content-Type": "image/x-icon"
          });
          break;

        case 'css':
          response.writeHead(200, {
            "Content-Type": "text/css"
          });
          break;

        case 'js':
          response.writeHead(200, {
            "Content-Type": "text/javascript"
          });
          break;

        default:
          response.writeHead(200, {
            "Content-Type": "text/plain"
          });
      }

      response.write(data);
      response.end();
    }

  });


}).listen(8888);









//Una Pagina Web es un conjunto de archivos (html, css, js) que el navegador
//puede interpretar y ver.

//Una Aplicacion Web es un programa dentro de un servidor que lo que hace es
//procesar informacion que es enviada por el servidor web

//Un Servidor Web es aquel que manipula el protocolo http
