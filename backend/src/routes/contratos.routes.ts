import { Router } from 'express';
import type { Request, Response } from 'express';
import type { CreateContratoInput } from '../types/contrato.js';

const contratosRouter = Router();

contratosRouter.post('/', (req: Request <{},{}, CreateContratoInput>, res: Response) => {
    const {fileName, type, filePath} = req.body ?? {};
    if (!fileName) {
     return res.status(400).json({ erro: "Ops, você esqueceu de selecionar o arquivo!!" });
    }
    if (!type) {
     return res.status(400).json({ erro: "Ops, você esqueceu de selecionar o tipo do contrato!!" });
    }
    if (!filePath) {
     return res.status(400).json({ erro: "Ops, você esqueceu de selecionar o caminho do arquivo" });
    } 
     return res.status(201).json({fileName, type, filePath});
   
} );


export default contratosRouter;