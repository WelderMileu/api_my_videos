const router = require('express').Router();
const sequelize = require('./config/connection.js')
const videos = require('./config/model.js')

router.get('/', (request, response) => {
	videos.findAll()
		.then(data => {
			console.log(data);
			response.json(data);
		}).catch(err => {
			console.log(`Erro ao tentar executar model => ${err}`)
			response.json({ erro: err });
		});
});

router.post('/post/:title?:url?', (request, response) => {
	const { title, url } = request.params;

	videos.create({
		title,
		url
	}).then(data => {
		console.log(data)
	}).catch(err => {
		console.log(`Erro ao tentar computar dados ${err}`)
	});
})

module.exports = router;