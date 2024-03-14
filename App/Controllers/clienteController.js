const clienteService = require("../../App/Services/clienteService");

async function criarClienteController(req, res) {
    try {
        await clienteService.criarClienteService(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarClientesController(res) {
    try {
        const customers = await clienteService.listarClientesService();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function atualizarClienteController(req, res) {
    try {
        await clienteService.atualizarClienteService(req.params.id, req.body);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deletarClienteController(req, res) {
    try {
        await clienteService.deletarClienteService(req.params.id);
        res.status(201);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarClienteController(req, res) {
    try {
        const customer = await clienteService.listarClienteService(req.params.id);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    criarClienteController,
    listarClientesController,
    atualizarClienteController,
    deletarClienteController,
    listarClienteController
};
