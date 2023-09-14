import express from 'express';

const app= express();
app.use(express.json());

import usuarioRuta from '../src/routes/usuarioRuta.js';

app.use('/api', usuarioRuta); 

app.get('/',(req,res) => {
    res.send('Hola Mundo ');
});


const PUERTO = 5000 || process.env.PUERTO;

app.listen(PUERTO, () => {
    console.log(`El puerto es : ${PUERTO}` );
});
