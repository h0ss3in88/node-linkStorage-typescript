import {Request, Response, Router} from "express";

const pingApi: Router = Router();
pingApi.get('/ping', (req: Request, res: Response) => {
    return res.status(200).json({"ping": "pong"});
});
export {pingApi};