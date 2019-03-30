const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const settings = require('./settings');

const PORT = process.env.PORT || 9000;
const app = express();

mongoose.connect(settings.MONGO_URI, { useNewUrlParser: true})
	.then(() => console.log('Database connected'))
	.catch(err => console.log(err));

mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const authRouter = require('./routes/api/auth');
const poemsRouter = require('./routes/api/poems');

app.use('/api/poems', poemsRouter);
app.use('/api/auth', authRouter);

app.use(compression());
app.use(morgan('combined'))

if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(
			path.resolve(
				__dirname, 'client', 'build', 'index.html',
			)
		)
	});
}

app.listen(PORT, () => console.log(`Server starting on ${PORT} port`));



