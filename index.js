/* Constante que inicializa el framework */
const express = require("express");
const mongoose =require("mongoose");
/* Constante que recibe las funciones del framework */
const app= express();
/* Importamos la libreria dotenv para tranajar los archivos .env */
require("dotenv").config();
/* Crear constante con el puerto de conexión */
const port= process.env.PORT || 5000;

/* Constante que inicializa el framework */
app.listen(port, ()=>{
    console.log("Puerto activo:",port);
});

mongoose
.connect(process.env.DATABASE_CONNECTION_STRING)
.then (()=> console.log("conectados con DB"))
.catch ((err)=> console.error(err));


