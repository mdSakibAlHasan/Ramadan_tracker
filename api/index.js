import express from "express";
import authRoutes from './Auth/path.js'
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/api',authRoutes);


app.post('/',(req,res)=>{
    res.send('This is home page');
});


app.listen(3002,()=>{
    console.log('lisening on port 3002');
});