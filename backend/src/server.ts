import express, { Request, Response } from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  return response.send({ message: 'CU' });
});

app.listen(1337);
