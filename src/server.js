// const express = require('express');
// const app = express();
// const fs = require("fs");
// const cors = require("cors")
// const path = require('node:path')
// const directoriALlegir = 'C:\\'
// const concat = require('stream-concat');
// // const readableStream = fs.createReadStream("C:\\GuillemDAM\\guillem.txt")
// //
// //
// // readableStream.on('data', (chunk) => {
// //   console.log(chunk)
// // })
//
// const nombreArchivo = 'C:\\GuillemDAM\\guillem.txt';
//
// // const readableStream = fs.createReadStream(nombreArchivo);
//
// // readableStream.on('data', (chunk) => {
// //   console.log(chunk);
// // });
// //
// const nomFitxer = 'C:\\GuillemDAM\\guillem.txt';
// const cognomFitxer = 'C:\\GuillemDAM\\pujol.txt';
// const segonCognomFitxer = 'C:\\GuillemDAM\\fabrega.txt';
// //
// // const readableStream = fs.createReadStream(nomFitxer, { encoding: 'utf8' });
// // const writableStream = fs.createWriteStream(cognomFitxer);
// //
// // readableStream.pipe(writableStream);
//
// const bufferBuit = Buffer.alloc(0);
// const bufferAmbByte7 = Buffer.alloc(5, 7);
// const bufferAmbBytes10a15 = Buffer.from([10, 11, 12, 13, 14, 15]);
//
// console.log("Buffer buit:", bufferBuit);
// console.log("Buffer amb el byte 7:", bufferAmbByte7);
// console.log("Buffer amb bytes del 10 al 15:", bufferAmbBytes10a15);
//
//
// const readableStream = fs.createReadStream(cognomFitxer);
//
// let bufferData = Buffer.alloc(0);
//
// readableStream.on('data', (chunk) => {
//   bufferData = Buffer.concat([bufferData, chunk]);
// });
//
// readableStream.on('end', () => {
//   console.log('Bytes del fitxer:');
//   console.log(bufferData);
//   console.log('Text original del fitxer:');
//   console.log(bufferData.toString('utf8'));
// });
//
//
//
// const readStream1 = fs.createReadStream(nomFitxer, { encoding: 'utf8' });
// const readStream2 = fs.createReadStream(cognomFitxer, { encoding: 'utf8' });
// const writeStream = fs.createWriteStream(segonCognomFitxer, { encoding: 'utf8' });
//
// const combinedStream = concat([readStream1, readStream2]);
//
// combinedStream.pipe(writeStream);
//
// writeStream.on('finish', () => {
//   console.log('Els continguts dels dos fitxers s\'han escrit a fitxer3.txt');
// });
// // writeableStream.write('hola \n' );
// // writeableStream.write('com estas?, \n' );
// // writeableStream.end('jo be \n' );
//
//
//
//
// app.use(express.json());
// app.use(cors());
//
// port = 3080;
// app.listen(port, () => {
//   console.log(`Server listening on the port::${port}`)
// })
//
// // app.post('/api/escriure', (req, res) => {
// //   fs.writeFileSync("C:\\GuillemDAM\\guillem.txt", "Guillem Pujol", { flag: 'a+' });
// //   res.json("Arxiu modificat correctament");
// // });
// //
// // app.post('/api/crearCarpeta', (req, res) => {
// //   const ruta = 'C:\\GuillemDAM'; // Ruta deseada donde quieres crear la carpeta
// //   const nomCarpeta  = 'test';
// //   const rutaCompleta = path.join(ruta, nomCarpeta);
// //
// //   fs.mkdir(rutaCompleta, (err) => {
// //     if (err) {
// //       return console.error(err);
// //     }
// //     console.log('Directori creat a:', rutaCompleta);
// //     res.send('Directori creat a: ' + rutaCompleta);
// //   });
// //   // res.json('directori creat ');
// //
// // });
// // app.get('/api/llistar', (req, res) => {
// //   fs.readdir(directoriALlegir, (err, files) => {
// //     if (err) {
// //       console.error('Error al leer el directorio:', err);
// //       return res.status(500).send('Error interno del servidor');
// //     }
// //
// //     const extensions = files.map(file => path.extname(file))
// //       .filter(ext => ext !== '');
// //     console.log(extensions);
// //     res.send(extensions);
// //   });
// // });
// //
// // // app.post('/api/passarFitxer', (req, res) => {
// // //   const nomFitxer = 'Guillem.txt';
// // //   const rutaOrigen = path.join('C:\\GuillemDAM');
// // //   const rutaDesti = path.join('C:\\GuillemDAM', 'test', 'FitxerCanviatDeNom.txt');
// // //
// // //   fs.rename(
// // //     rutaOrigen,
// // //     rutaDesti,
// // //   );
// // // });
// //
// // app.post('/api/passarExercisi0', (req , res) => {
// //   const directorioALeer = 'C:\\GuillemDAM'; // Ruta completa del directorio
// //   fs.readdir(directorioALeer, (err, files) => {
// //     if (err) {
// //       console.error('Error al leer el directorio:', err);
// //       return res.status(500).send('Error interno del servidor');
// //     }
// //
// //     console.log('Contenido del directorio:');
// //     files.forEach(file => {
// //       console.log(file);
// //     });
// //
// //     res.send(files);
// //   });
// // });
// //
// // app.post('/api/mostrarContingut', (req, res) => {
// //   const rutaFitxer = 'C:\\GuillemDAM\\guillem.txt';
// //
// //   // Leer el contenido del archivo
// //   fs.readFile(rutaFitxer, 'utf8', (err, data) => {
// //
// //
// //     res.send(data);
// //   });
// // });
//
//
//


const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('node:path');
const path2 = require('path')
app.use(express.json());
app.use(cors());



//Ex1
app.get('/llegirImatgesPujol', (res, req) => {
  const readablestream = fs.createReadStream("C:\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg", {highWaterMark: 4096})
  const readablestream2 = fs.createReadStream("C:\\UF1_ExamenAaD\\Imatges\\Imatge2.png", {highWaterMark: 4096})
  readablestream.on('data', (chunk) => {
    console.log(chunk)
  })
  readablestream2.on('data', (chunk) => {
    console.log(chunk)
  })

//Ex2

  app.get('/mostraNomsPujol', (res,req) => {
    const directoriALlegir = ("C:\\UF1_ExamenAaD")
    fs.readdir(directoriALlegir, (err, files) => {
      files.forEach(file => {
        console.log(file)
      })
    })
  })

  //Ex3

  app.put('/writeBuffersPujol', (res, req) => {
    const pathSenseBuffers = 'C:\\UF1_ExamenAaD\\Documents'
// const path = 'C:\\UF1_ExamenAaD\\Documents\\Buffers'
    const nomCarpeta = 'Buffers'
    const rutaCompleta = path.join(pathSenseBuffers, nomCarpeta)

    if(!fs.existsSync(rutaCompleta)){
      fs.mkdir(rutaCompleta, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log('Directori creat a:', rutaCompleta);
      })
    }
    if (fs.existsSync(rutaCompleta)){
      const writeableStream = fs.createWriteStream("C:\\UF1_ExamenAaD\\Documents\\Buffers\\ex4guillempujol.txt")
      writeableStream.write('Guillem \n' )
      writeableStream.write('Pujol\n')
      writeableStream.end('Fabrega, 21-03-2024')
    }
  })
  app.post('/copiaFitxerPujol', (res,req) => {

  })



})

const port = 3030;
app.listen(port, () => {
  console.log(`El servidor está escoltant per el port ${port}`);
});

