import {app} from './App';

const porta = 3000;

const server = app.listen(porta, () =>{
    console.log(`app ouvindo na porta ${porta}`);
});

/**
    Ao encerrar o processo, o app é finalizado também
*/

process.on('SIGINT',  ()=>{
    server.close();
    console.log('App finalizado');
});