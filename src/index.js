require("dotenv").config()

const port = process.env.PORT;
const express = require('express');
const app = express();
const cors =  require("cors");
const apiRoutes = require('../src/Routes/api'); // Importando as rotas

app.use(cors());

app.use(express.json());

app.listen(port);

app.use("/", apiRoutes);