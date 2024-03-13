const express = require('express');
const router = express.Router();
const controllerCliente = require("../../App/Controllers/clienteController")

router.get('/', (req, res) => {
    res.send('Dashboard');
});

router.get('/clientes', controllerCliente.listarClientesController);

router.post('/clientes', async (req, res) => {
    await controllerCliente.criarClienteController(req, res);
});

module.exports = router;