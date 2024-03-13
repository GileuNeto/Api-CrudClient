const clienteRepository = require("../../App/Repository/clienteRepository");

async function listarClientesService() {
    try {
        return await clienteRepository.listarClientesRepository();
    } catch (error) {
        throw new Error(`Erro ao listar clientes: ${error.message}`);
    }
}

async function criarClienteService(customer) {
    try {
        await clienteRepository.criarClienteRepository(customer);
    } catch (error) {
        throw new Error(`Erro ao criar cliente: ${error.message}`);
    }
}

module.exports = {
    listarClientesService,
    criarClienteService,
};
