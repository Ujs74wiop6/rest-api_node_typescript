"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT, () => {
    console.log(`App: ON-LINE! na porta: ${process.env.PORT}`);
}).on('error', (err) => {
    console.log('App: OFF-LINE | Erro ao iniciar o servidor: ', err.message);
});
