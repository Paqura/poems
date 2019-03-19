const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const settings = require('./settings');

const PORT = process.env.PORT || 9000;

const app = express();

mongoose.connect(settings.MONGO_URI, { useNewUrlParser: true})
	.then(() => console.log('Database connected'))
	.catch(err => console.log(err));

mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const poemsRouter = require('./routes/api/poems');

app.use('/api', poemsRouter);

app.listen(PORT, () => console.log(`Server starting on ${PORT} port`));



