const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const sequelize = require('./config/connection.js');
const model = require('./config/model.js')

// Testando a conexão com nosso banco de dados.
async function testning() {
	try {
		await sequelize.authenticate();
		console.log('Conexão efetuda com sucesso!')
	} catch (erro) {
		console.log(`Erro ao tentar fazer Conexão: ${erro}`)
	}
}

testning()

// Rodando o nosso servidor.
app.listen(port, () => console.log(`server ruanning port ${port}`));