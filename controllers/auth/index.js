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
			isAdmin: req.body.isAdmin || false,
		});

		try {
			await newUser.save();
			res.status(HTTP_STATUS.CREATED).json(newUser)
		} catch(err) {
			res.json({
				message: err.message,
			})
		}

	} else {
		res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Этот email уже занят',
		});
	}
};

const signIn = async(req, res) => {
	const candidate = await User.findOne({email: req.body.email});
	let resultOfPasswordMatching = null;

	if(!candidate)
		return res.status(HTTP_STATUS.NOT_FOUND).json({message: 'Введённый email не корректен'});

	resultOfPasswordMatching = bcrypt.compareSync(req.body.password, candidate.password);

	if(resultOfPasswordMatching) {
		const token = jwt.sign({
			firstName: candidate.firstName,
			lastName: candidate.lastName,
			email: candidate.email,
			avatar: candidate.avatar,
			userId: candidate._id
		}, settings.JWT_KEY, {expiresIn: 60 * 60});

		return res.status(HTTP_STATUS.SUCCESS).json({token: `Bearer ${token}`});
	}

	return res.status(HTTP_STATUS.NOT_AUTH).json({message: 'Введённый пароль неверный. Повторите попытку'});
};

module.exports = {
	signIn,
	signUp,
};
