const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).json({
		title: 'Poem title',
		body: 'Long text',
	});
});

module.exports = router;