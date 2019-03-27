const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const settings = require('../../settings');
const {HTTP_STATUS} = require('../../helpers/index');

const signUp = async(req, res) => {
	const candidate = await User.findOne({email: req.body.email});

	if(!candidate) {
		const salt = bcrypt.genSaltSync(10);
		const password = req.body.password;

		const newUser = new User({
			avatar: req.body.avatar,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: bcrypt.hashSync(password, salt),
			isAdmin: req.body.isAdmin,
		});

		try {
			await newUser.save();
			res.status(HTTP_STATUS.CREATED).json(newUser)
		} catch(err) {
			errorHandler(res, err);
		}

	} else {
		res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'EMAIL_ALREADY_EXIST',
		});
	}
};

const signIn = async(req, res) => {
	const candidate = await User.findOne({email: req.body.email});
	const resultOfPasswordMatching = bcrypt.compareSync(req.body.password, candidate.password);

	if(!candidate)
		return res.status(HTTP_STATUS.NOT_FOUND).json({message: 'EMAIL_IS_NOT_FOUND'});

	if(resultOfPasswordMatching) {
		const token = jwt.sign({
			name: candidate.name,
			email: candidate.email,
			avatar: candidate.avatar,
			userId: candidate._id
		}, settings.JWT_KEY, {expiresIn: 60 * 60});

		return res.status(HTTP_STATUS.SUCCESS).json({token: `Bearer ${token}`});
	}

	return res.status(HTTP_STATUS.NOT_AUTH).json({message: 'PASSWORD_IS_WRONG'});
};

module.exports = {
	signIn,
	signUp,
};
