import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import membersRouter from './routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 4000;

app.use(cors({
	origin: '*'
}));

app.use(express.json());

app.get('/', (_req, _res) => {
	const test = "Server Running";
	_res.send(test);
});


app.listen(port, () => {
	console.log(`JavaScript with Express http://localhost:${port}/`);
});

app.use('/members', membersRouter);

const dbStr = process.env.MONGO_DB_CONNECT_STR;
console.log(dbStr);

mongoose.connect(dbStr);
const db = mongoose.connection; 

db.on('error', (error) => console.error(error));
db.on('open', () => console.log('Connected to Database'));

export default app;