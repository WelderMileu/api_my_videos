const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./connection.js');

// Definindo nosso maodel de videos.
const videos = sequelize.define('videos', {
	title : Sequelize.STRING,
	url : Sequelize.STRING,
	favorite : { 
		type: Sequelize.BOOLEAN, 
		defaultValue: false 
	}
});

// Executando o nosso model.
(async () => {
	await sequelize.sync({ force: true })
		.then(() => console.log('Model Criado com sucesso'))
		.catch(err => console.log('Erro ao tentar criar model' + err))
})();

module.exports = videos;
