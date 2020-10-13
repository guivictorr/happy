import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import './database/connection';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(AppError.errorHandler);

app.listen(1337);
