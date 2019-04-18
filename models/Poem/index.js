
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	body: {
		type: String,
		required: true,
	},

	imgPath: {
		type: String,
		required: false,
	},

	views: [String],
	favorites: [String],
});

module.exports = mongoose.model('poems', poemSchema);