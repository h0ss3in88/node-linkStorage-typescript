import {pingApi} from "./lib/ping";
import {Express} from "express";

const setupApi = (app:Express) => {
  app.use('/api',pingApi);
}

export {setupApi}

