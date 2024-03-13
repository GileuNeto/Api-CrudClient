const clienteService = require("../../App/Services/clienteService");

async function listarClientesController(req, res) {
    try {
        const customers = await clienteService.listarClientesService();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function criarClienteController(req, res) {
    try {
        await clienteService.criarClienteService(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarClientesController,
    criarClienteController,
};
