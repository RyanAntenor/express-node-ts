import 'module-alias/register';
import express from 'express';
import morgan from 'morgan';
import userRoute from '@routes/user.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', userRoute);
// app.use(express.urlencoded())

app.use(morgan("dev"));

export default app;