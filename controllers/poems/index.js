const Poem = require('../../models/Poem');
const Comment = require('../../models/Comment');
const {HTTP_STATUS} = require('../../helpers');

const add = async(req, res) => {
	const {body: {title, body, imgPath}} = req;
	const candidate = new Poem({
		title: Boolean(title) ? title : '***',
		body,
		imgPath,
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
	try {
		await Poem.updateOne({_id: req.params.id}, req.body);
		res.status(HTTP_STATUS.SUCCESS).json({message: HTTP_STATUS.SUCCESS});
	} catch(error) {
		res.status(HTTP_STATUS.BAD_REQUEST).json({message: error.message});
	}
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
		const ids = candidate.comments;
		// !TODO может стоит вынести в отдельный запрос
		const comments = await Comment.find({_id: {$in: ids}}) || [];

		res.status(HTTP_STATUS.SUCCESS).json({
			data: candidate,
			comments,
		});
	} catch(error) {
		res.status(HTTP_STATUS.NOT_FOUND).json({
			message: 'NOT_FOUND',
		});
	}
};

module.exports = {
	add,
	update,
	getAll,
	getById,
};