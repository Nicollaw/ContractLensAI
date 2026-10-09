import { Request, Response, Router } from 'express';
import {CreateContratoInput} from '../types/contrato';

const contratosRouter = Router();

contratosRouter.post('/', (req: Request <{},{}, CreateContratoInput>, res: Response) => {
    const {fileName, type, filePath} = req.body;

    if (!fileName) {
     return res.status(400).json({ erro: "Ops, você esqueceu de selecionar o arquivo!!" });
    }
    if (!type) {
     return res.status(400).json({ erro: "Ops, o tipo do arquivo escolhido é invalido" });
    }
    if (!filePath) {
     return res.status(400).json({ erro: "Ops, o caminho para o arquivo é invalido" });
    } 
     return res.status(201).json({fileName, type, filePath});
   
} );


export default contratosRouter;