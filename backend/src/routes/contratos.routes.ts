import { response, Router } from 'express';
import type { Request, Response } from 'express';
import type { CreateContratoInput } from '../types/contrato.js';
import { validate } from 'uuid';

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

contratosRouter.get('/', (req: Request, res: Response) => {
    return res.status(200).json([]);
})


contratosRouter.get('/:id', (req: Request<{id: string}>, res: Response) => {
    const { id } = req.params
     if (!validate(id)) {
         return res.status(400).json({ erro: 'deve ser um UUID válido' })
     }   return res.status(200).json({id});
})

contratosRouter.delete('/:id', (req: Request<{id: string}>, res: Response) => {
    const { id } = req.params
     if (!validate(id)) {
         return res.status(400).json({ erro: 'deve ser um UUID válido' });
     }   return res.status(204).send();
})
export default contratosRouter;