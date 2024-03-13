const {Pool} = require("pg");

async function connect(){

    if (global.connection)
        return global.connection.connect();

    const {Pool} = require("pg");
    const pool = new Pool({
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    });

    const ConectData = await pool.connect();
    console.log("conexão inicializada - banco de dados");

    //Este select retorna a data e hora atuais do bd
    const res = await ConectData.query("select now()");
    console.log(res.rows[0]);
    ConectData.release();

    global.connection = pool;
    return pool.connect();
}

module.exports = connect();

async function listarClientesRepository() {
    const client = await connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

async function criarClienteRepository(customer) {
    const client = await connect();
    const sql = 'INSERT INTO clientes(nome, email, telefone) VALUES ($1, $2, $3);';
    const values = [customer.nome, customer.email, customer.telefone,];
    await client.query(sql, values);
}


module.exports = {
    listarClientesRepository,
    criarClienteRepository
}