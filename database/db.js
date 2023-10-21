import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {

    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-hx2ppiz-shard-00-00.r9tfkr1.mongodb.net:27017,ac-hx2ppiz-shard-00-01.r9tfkr1.mongodb.net:27017,ac-hx2ppiz-shard-00-02.r9tfkr1.mongodb.net:27017/?ssl=true&replicaSet=atlas-14ohnd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URL, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting database ', error.message);
    })
}

export default Connection;