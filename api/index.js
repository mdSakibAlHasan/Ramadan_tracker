import express from "express";
import authRoutes from './Auth/path.js'

const app = express();



app.use('/api',authRoutes);




app.listen(3002,()=>{
    console.log('lisening on port 3002');
});