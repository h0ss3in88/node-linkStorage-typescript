import express,{Express,Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import {setupApi} from "./api";

dotenv.config();
const PORT: number= parseInt(process.env.PORT!,10) || 3600;
let app: Express = express();
app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT",PORT);
setupApi(app);
app.get('/',(req:Request, res:Response, next:NextFunction) => {
    return res.status(200).json("{'hello': 'world' }");
});
export {app}