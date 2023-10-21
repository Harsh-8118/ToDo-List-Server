import express from "express";
import cors from 'cors';
import Routes from './routes/route.js'
import Connection from "./database/db.js";


const app = express();
app.use(cors());

app.use(express.json({extended: true}));
app.use(express.urlencoded({ extended: true}))

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`your server is running on 
PORT ${PORT}`));