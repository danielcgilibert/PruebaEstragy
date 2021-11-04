const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

app.use("/pais", require("./routes/paises.routes")); //Rutas de usuarios

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando!! :: PUERTO ==> ${process.env.PORT}`);
});
