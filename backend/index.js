import express, { response } from "express";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const __dirname = path.resolve();

//const PORT =5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get(/(.*)/, (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    })
}

//Middleware
app.use(express.json());

//CORS
app.use(cors());

/*
app.use(
    cors({
        origin: 'http://localhost:5000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['Content-Type'],
    })
);
*/


app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Bienvenido al stack MERN');
});

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to my database');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Application is listening to port:${process.env.PORT || 5000}`);
    });
}).catch((error) => { console.log(error) })
