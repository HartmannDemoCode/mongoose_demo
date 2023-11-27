// npm install @apollo/server express graphql cors
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import carRoutes from './routes/carRoute';
dotenv.config();
// console.log('DB: ... :',process.env)
// Connect to MongoDB database
const DB = process.env.DATABASE_DEV
    .replace('<password>', process.env.DATABASE_PASSWORD)
    .replace('<username>', process.env.DATABASE_USERNAME)
    .replace('<database>', process.env.DATABASE_NAME);
mongoose.connect(DB, {}).then(() => console.log('DB connection successful!'));
const port = process.env.PORT || 3000;
const app = express();
// Middlewares
app.use(cors());
app.use(bodyParser.json());
// Routes
app.get('/', (req, res, next) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.use('/api/v1/cars', carRoutes);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
