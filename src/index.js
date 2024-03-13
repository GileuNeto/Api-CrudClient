require("dotenv").config()
const express = require('express');
const app = express();
const cors =  require("cors");
const apiRoutes = require('../src/Routes/api'); // Importando as rotas
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.listen(port);

app.use("/", apiRoutes);