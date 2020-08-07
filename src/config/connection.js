const { Sequelize } = require('sequelize');

// Criando banco de dados, e tentando uma conexão.
module.exports = new Sequelize({
	dialect : 'sqlite',
	storage : './database.sqlite'
});
