import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, NotFound } from './middleware/errorMiddleware.js'

dotenv.config();
connectDB();
const app = express();

app.get('/',(req,res) => {
    res.send('API is running...')
});

app.use('/api/products', productRoutes);

app.use(NotFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Serv is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
 