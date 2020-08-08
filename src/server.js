const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const config = require('dotenv').config();

const port = process.env.PORT || 8000;
const sequelize = require('./config/connection.js'); // Conexão com o banco de dados.
const model = require('./config/model.js'); // Criando uma nova model.
const router = require('./routes.js'); // Exportando nossas rotas.

// Configurando o nosso json.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors()); // Setando o cors da aplicação.

// Testando a conexão com nosso banco de dados.
(async function testning() {
	try {
		await sequelize.authenticate();
		console.log('Conexão efetuda com sucesso!')
	} catch (erro) {
		console.log(`Erro ao tentar fazer Conexão: ${erro}`)
	}
})();

app.use(router)

// Rodando o nosso servidor.
app.listen(port, () => console.log(`server ruanning port ${port}`));