const Poem = require('../../models/Poem');
const Comment = require('../../models/Comment');
const {HTTP_STATUS} = require('../../helpers');

const getComments = async(req, res) => {
	try {
		const candidates = await Comment.find();
		res.json(candidates);
	} catch (error) {
		res.status(HTTP_STATUS.NOT_FOUND).json({
			message: HTTP_STATUS.NOT_FOUND,
		});
	}
};

const getCommentById = async(req, res) => {
	try {
		const candidate = await Comment.findById(req.params.id);
		res.json(candidate);
	} catch (error) {
		res.status(HTTP_STATUS.NOT_FOUND).json({
			message: HTTP_STATUS.NOT_FOUND,
		});
	}
};

const addComment = async(req, res) => {
	const newComment = Comment({
		poemRef: req.params.poemId,
		text   : req.body.text,
		owner  : req.body.owner,
	});

	try {
		const candidate = await newComment.save();
		await Poem.findOneAndUpdate({_id: req.params.poemId}, {$push: {comments: candidate}});
		res.json(candidate);
	} catch(err) {
		res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: HTTP_STATUS.BAD_REQUEST,
		});
	}
};

module.exports = {
	addComment,
	getComments,
	getCommentById,
};