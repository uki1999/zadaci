import express, {  Router } from "express";
var bodyParser = require('body-parser');
import * as songController from './controllers/songController';
import { router } from './routes/routes';


const app = express();
app.set("port", 3000);

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(app.get("port"),()=>{
    console.log("App running...", app.get("port"))
})