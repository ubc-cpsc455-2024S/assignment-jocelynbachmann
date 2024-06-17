import express from 'express';
import cors from 'cors';
import membersRouter from './routes.js';

const app = express();
const port = 4000;

app.use(cors({
	origin: '*'
}));


app.get('/', (_req, _res) => {
	const test = "Server Running";
	_res.send(test);
});


app.listen(port, () => {
	console.log(`JavaScript with Express http://localhost:${port}/`);
});

app.use(express.json());
app.use('/members', membersRouter);

export default app;