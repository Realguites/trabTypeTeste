import * as express from 'express';
import * as bodyParser from 'body-parser'; // ajuda a parse json
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';

import { routerUsuario } from './routes/usuario';

/*
Cria a aplicação
*/

export const app = express();

/**
 * Libera o acesso aos serviços
 */

app.use(cors());

/*
* Permite receber e anviar json
 */

app.use(bodyParser.json());

/**
 * configura os logs
 */

app.use(logger('dev'));


//conf ok.

/*
    Conecta no BD
*/

conectarServidorNoBD();

/*
configuração de rotas
*/

app.use('/usuario', routerUsuario);
app.use('/', (req,res)=> res.send('API do smartFluxo'));
