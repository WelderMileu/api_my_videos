const router = require('express').Router();
const sequelize = require('./config/connection.js')
const videos = require('./config/model.js')

// Listando dados do nosso model usando get.
router.get('/', (request, response) => {
	videos.findAll()
		.then(data => response.json(data))
		.catch(err => response.json({ erro: err }));
});

// Publicando um novo video com o metodo post.
router.post('/post', (request, response) => {
	const { title, url } = request.body; 
	
	videos.create({ title, url })
		.then(data => console.log(data))
		.catch(err => console.log(`Erro ao tentar computar dados ${err}`));
})

module.exports = router;


