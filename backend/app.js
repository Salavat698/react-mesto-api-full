const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/errorloggers');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/error');
const { createUser, login } = require('./controllers/users');

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();
const NotFoundError = require('./errors/notfound-err');
const { validateSignUp, validateSignIn } = require('./middlewares/validators');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(cors({
  origin: [
    'https://slt116.nomoredomains.monster',
    'http://slt116.nomoredomains.monster',
    'http://localhost:3000',
    'https://localhost:3000',
    'http://84.201.134.104',
    'https://84.201.134.104',
  ],
  credentials: true,
}));
app.use(helmet());
app.use(limiter);
app.use(cookieParser());
app.use(bodyParser.json());

app.use(requestLogger); // подключаем логгер запросов

app.post('/signup', validateSignUp, createUser);
app.post('/signin', validateSignIn, login);

app.use(auth);
app.use('/', userRouter);
app.use('/', cardRouter);
app.use('*', () => {
  throw new NotFoundError('Ресурс не найден');
});
app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());
app.use(errorHandler);

app.listen(PORT);
