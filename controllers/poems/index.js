const Poem = require('../../models/Poem');
const {HTTP_STATUS} = require('../../helpers');

const getPoems = async(req, res) => {
	try {
		const poems = await Poem.find();
		res.status(HTTP_STATUS.SUCCESS).json(poems);
	} catch(error) {
		res.status(HTTP_STATUS.NOT_FOUND);
	}
};

const addPoem = async(req, res) => {
	const candidate = new Poem({
		title: req.body.title,
		body : req.body.body,
		imgPath: req.body.imgPath,
	});

	try {
		await candidate.save();
		res.status(HTTP_STATUS.SUCCESS).json({message: 'CREATED'});
	} catch(error) {
		res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'BAD_REQUEST',
			error: error.message || error,
		});
	}
};

const update = async(req, res) => {
	res.send('Update');
};

module.exports = {
	addPoem,
	getPoems,
};