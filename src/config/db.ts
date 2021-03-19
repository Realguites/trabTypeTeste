import {createConnection} from 'typeOrm';

export const conectarServidorNoBD = async () =>{
    const conexao = await createConnection(); 
    console.log(`App conectado ao bd: ${conexao.options.database}`);

    process.on('SIGINT', () => {
        conexao.close().then(() => console.log('Conexão fechada'));
    });
}