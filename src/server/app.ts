import express,{Express,Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const PORT: number= parseInt(process.env.PORT!,10) || 3600;
let app: Express = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT",PORT);
app.get('/',(req:Request, res:Response, next:NextFunction) => {
    return res.status(200).json("{'hello': 'world' }");
});
export {app}