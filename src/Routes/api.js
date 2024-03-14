const express = require('express');
const router = express.Router();
const controllerCliente = require("../../App/Controllers/clienteController")

router.get('/', (req, res) => {
    res.send('Dashboard');
});

router.post('/clientes', async (req, res) => {
    await controllerCliente.criarClienteController(req, res);
});

router.get('/clientes', async (req, res) => {
    await controllerCliente.listarClientesController(res);
});

router.patch('/clientes/:id', async (req, res) => {
    await controllerCliente.atualizarClienteController(req, res);
    res.sendStatus(200);
});

router.delete('/clientes/:id', async (req, res) => {
    await controllerCliente.deletarClienteController(req, res);
    res.sendStatus(204);
});

router.get('/clientes/:id', async (req, res) => {
    const customer = await controllerCliente.listarClienteController(req, res);
    res.json(customer);
});

module.exports = router;