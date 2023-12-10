import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async()=>{
    await main();
})();

async function main(){
    console.clear();
    const { b:base, l:limit, s:showTable, n: fileName, d: fileDestination } = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}