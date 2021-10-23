import http,{Server} from "http";
import {AddressInfo} from "net";
import {app} from "./server/app";

let server:Server = http.createServer(app);
server.listen(app.get("PORT"), () => {
    let address:AddressInfo =server.address() as AddressInfo;
    console.log(`Running on ${address.address}:${address.port} ⚡`);
});