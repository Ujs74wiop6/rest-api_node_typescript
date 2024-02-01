import { server } from './server/Server';

server.listen(process.env.PORT, () => {
    console.log(`App: ON-LINE! na porta: ${process.env.PORT}`);
}).on('error', (err) => {
    console.log('App: OFF-LINE | Erro ao iniciar o servidor: ', err.message);
});