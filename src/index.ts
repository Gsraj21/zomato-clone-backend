import express, { Request, Response } from "express";
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from './routes/MyUserRoute'


//Db connection

mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => console.log('database is connected'))
    .catch(() => console.log('error while connecting to the db'))


const app = express();
app.use(express.json());
app.use(cors());


app.get('/health', (req:Request ,res:Response)=>{
    res.send({
        message:"server health is okay"
    })
})

//Routes
app.use('/api/my/user',myUserRoute);

app.listen(7000, () => {
    console.log("Balaji is listening on port", 7000);
})