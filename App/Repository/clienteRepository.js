const db = require("../../database/db")

async function criarClienteRepository(customer) {
    const client = await db.connect();
    const sql = 'INSERT INTO clientes(nome, email, telefone) VALUES ($1, $2, $3);';
    const values = [customer.nome, customer.email, customer.telefone,];
    await client.query(sql, values);
}

async function listarClientesRepository() {
    const client = await db.connect();
    const res = await client.query('SELECT * FROM clientes');

    if (res.rows.length === 0) {
        console.log('Não há registros de clientes.');
    }
    return res.rows;
}

async function atualizarClienteRepository(id, customer) {
    const client = await db.connect();
    const sql = "UPDATE clientes SET nome=$1, email=$2, telefone=$3 WHERE id=$4";
    const values = [customer.nome, customer.email, customer.telefone, id];
    await client.query(sql, values);
}

async function deletarClienteRepository(id) {
    const client = await db.connect();
    const sql = "DELETE FROM clientes WHERE id=$1";
    const values = [id];
    await client.query(sql, values);
}

async function listarClienteRepository(id) {
    const client = await db.connect();
    const res = await client.query('SELECT * FROM clientes WHERE ID=$1', [id]);
    return res.rows;
}

module.exports = {
    criarClienteRepository,
    listarClientesRepository,
    atualizarClienteRepository,
    deletarClienteRepository,
    listarClienteRepository
}