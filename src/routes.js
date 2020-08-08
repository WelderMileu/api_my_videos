const router = require('express').Router();
const sequelize = require('./config/connection.js')
const videos = require('./config/model.js');

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
		.then(data => {
			console.log(data)
			return response.json({ 'new post': title })
		})
		.catch(err => console.log(`Erro ao tentar computar dados ${err}`));
})

// Editando o vidio usando o metodo put.
router.put('/update?:id', (request, response) => {
	const id = request.query.id;
	const { title, url, favorite } = request.body;

	videos.update({ title, url, favorite }, { where: { id }});
	return response.json(request.body);
})

// Deletar o vidio passado como parametro o id usando o metod delete.
router.delete('/delete?:id', (request, response) => {
	const id = request.query.id;

	// Deletando video.
	videos.destroy({ where : { id }});
	return response.json({ "delected" : id })
})

// Exportando nosso modulo.
module.exports = router;


