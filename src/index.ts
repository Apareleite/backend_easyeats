import connectDatabase from './database/index'
import express, { Application } from 'express';
import dotenv from 'dotenv';
import routes from './routes/index';
import corsMiddleware from './middlewares/index';
dotenv.config();
const app = express();


app.use(express.json());
//Cors
app.use(corsMiddleware());
//Conect database
connectDatabase(app);
//Routes
routes(app)



