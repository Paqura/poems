const Poem = require('../../models/Poem');
const {HTTP_STATUS} = require('../../helpers');

const add = async(req, res) => {
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

const edit = async(req, res) => {
	res.send('Update');
};

const getAll = async(req, res) => {
	try {
		const poems = await Poem.find();
		res.status(HTTP_STATUS.SUCCESS).json(poems);
	} catch(error) {
		res.status(HTTP_STATUS.NOT_FOUND);
	}
};

const getById = async(req, res) => {
	try {
		const candidate = await Poem.findById(req.params.id);
		res.status(HTTP_STATUS.SUCCESS).json(candidate);
	} catch(error) {
		res.status(HTTP_STATUS.NOT_FOUND).json({
			message: 'NOT_FOUND',
		});
	}
};

module.exports = {
	add,
	edit,
	getAll,
	getById,
};