const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');





//los middlewares siempre antes de las rutas 
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));





//la data de este servidor puede ser accedida desde esta url 
//solo puede acceder a los recursos de este servidor esta url 
//permite solicitudes de esta url
app.use(cors('http://127.0.0.1:5173/'))  // url de donde voy a request la data 

app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];
  res.json(data);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


/* CORS SIMILAR A ===> Un proxy es un intermediario entre dos sistemas que se comunican entre sí,
 como un cliente y un servidor. En una red informática, un proxy actúa como un
 punto de entrada y salida para las solicitudes de los clientes y las respuestas 
 de los servidores.
 Un proxy inverso actúa como un punto de entrada para las solicitudes de los clientes y las reenvía 
 a los servidores de la aplicación, permitiendo así que los servidores se centren en el procesamiento de la lógica de la aplicación. 
 */