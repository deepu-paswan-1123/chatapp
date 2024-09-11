import express from 'express';
import Connection from './database/db.js';
import route from './routes/Route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app=express();

Connection();


app.use(cors());

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',route);
const port=8000;



app.listen(port,()=>{
    console.log(`server is ruining at port ${port}`)
});