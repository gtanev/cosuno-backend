import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRoute from './routes/indexRoute.js';
import companyRoute from './routes/companyRoute.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRoute);
app.use('/companies', companyRoute);

app.set('json spaces', 2);

export default app;
