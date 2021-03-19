import {Router} from 'express';
import { UsuarioController } from '../controller/usuarioController';
import { Usuario } from '../entity/Usuario';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * 
 * Serviço para salvar um novo usuário
 */

routerUsuario.post('/', async (req,res) => {
    const{nome,email,idade} = req.body;
    const usuario = new Usuario(nome,email,idade);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});

