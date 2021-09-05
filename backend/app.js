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
const corsOption = {
  origin: [
    'https://slt116.nomoredomains.monster',
    'https://slt116.nomoredomains.club',
    'https://84.201.134.104',
  ],
  credentials: true,
};

app.use(helmet());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOption));
app.options('*', cors());
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(requestLogger); // подключаем логгер запросов
app.use(limiter);
app.post('/signup', validateSignUp, createUser);
app.post('/signin', validateSignIn, login);
app.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});
app.use(auth);
app.use('/', userRouter);
app.use('/', cardRouter);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());
app.use(errorHandler);
// app.use('*', (req, res, next) => {
//   next(new NotFoundError('Ресурс не найден'));
// });

app.listen(PORT);
