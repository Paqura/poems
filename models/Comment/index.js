const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	// POEM ID
	poemRef: {
		type: Schema.Types.ObjectId,
		ref : 'poems',
		required: true,
	},

	text: {
		type: String,
		required: true,
	},

	// USER ID
	owner: {
		id: {
			type: Schema.Types.ObjectId,
			ref: 'users',
			required: true,
		},

		firstName: {
			type: String,
			required: true,
		},

		lastName: {
			type: String,
			required: true,
		},
	},
});

module.exports = mongoose.model('comments', commentSchema);