const clienteRepository = require("../../App/Repository/clienteRepository");

async function criarClienteService(customer) {
    try {
        await clienteRepository.criarClienteRepository(customer);
    } catch (error) {
        throw new Error(`Erro ao criar cliente: ${error.message}`);
    }
}

async function listarClientesService() {
    try {
        return await clienteRepository.listarClientesRepository();
    } catch (error) {
        throw new Error(`Erro ao listar clientes: ${error.message}`);
    }
}

async function atualizarClienteService(id, customer) {
    try {
        await clienteRepository.atualizarClienteRepository(id, customer);
    } catch (error) {
        throw new Error(`Erro ao atualizar cliente: ${error.message}`);
    }
}

async function deletarClienteService(id) {
    try {
        await clienteRepository.deletarClienteRepository(id);
    } catch (error) {
        throw new Error(`Erro ao deletar cliente: ${error.message}`);
    }
}

async function listarClienteService(id) {
    try {
        return await clienteRepository.listarClienteRepository(id);
    } catch (error) {
        throw new Error(`Erro ao listar cliente: ${error.message}`);
    }
}

module.exports = {
    criarClienteService,
    listarClientesService,
    atualizarClienteService,
    deletarClienteService,
    listarClienteService
};
