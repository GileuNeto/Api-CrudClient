const db = require("../../database/db")

async function criarClienteRepository(customer) {
    const client = await db.connect();
    const emailExistsQuery = 'SELECT COUNT(*) FROM clientes WHERE email = $1';
    const emailExistsResult = await client.query(emailExistsQuery, [customer.email]);
    const emailExists = emailExistsResult.rows[0].count > 0;

    if (emailExists) {
        throw new Error('Não é possível criar o cliente. E-mail já em uso.');
    }

    const telefoneExistsQuery = 'SELECT COUNT(*) FROM clientes WHERE telefone = $1';
    const telefoneExistsResult = await client.query(telefoneExistsQuery, [customer.telefone]);
    const telefoneExists = telefoneExistsResult.rows[0].count > 0;

    if (telefoneExists) {
        throw new Error('Não é possível criar o cliente. Telefone já em uso.');
    }

    const insertQuery = 'INSERT INTO clientes(nome, email, telefone) VALUES ($1, $2, $3)';
    const insertValues = [customer.nome, customer.email, customer.telefone];
    await client.query(insertQuery, insertValues);
}

async function listarClientesRepository() {
    const client = await db.connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

async function atualizarClienteRepository(id, customer) {
    const client = await db.connect();
    const emailExistsQuery = 'SELECT COUNT(*) FROM clientes WHERE email = $1 AND id != $2';
    const emailExistsResult = await client.query(emailExistsQuery, [customer.email, id]);
    const emailExists = emailExistsResult.rows[0].count > 0;

    if (emailExists) {
        throw new Error('Não é possível atualizar o cliente. E-mail já em uso.');
    }

    const telefoneExistsQuery = 'SELECT COUNT(*) FROM clientes WHERE telefone = $1 AND id != $2';
    const telefoneExistsResult = await client.query(telefoneExistsQuery, [customer.telefone, id]);
    const telefoneExists = telefoneExistsResult.rows[0].count > 0;

    if (telefoneExists) {
        throw new Error('Não é possível atualizar o cliente. Telefone já em uso.');
    }

    const sql = "UPDATE clientes SET nome=$1, email=$2, telefone=$3 WHERE id=$4";
    const values = [customer.nome, customer.email, customer.telefone, id];
    await client.query(sql, values);
}

async function deletarClienteRepository(id) {
    const client = await db.connect();
    const sql = "DELETE FROM clientes WHERE id=$1 RETURNING *";
    const values = [id];
    const result = await client.query(sql, values);
    return result.rowCount;
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