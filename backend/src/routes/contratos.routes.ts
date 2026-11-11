import { Router } from 'express';
import type { Request, Response } from 'express';
import type { CreateContratoInput } from '../types/contrato.js';
import { validate } from 'uuid';
import {prisma} from '../lib/prisma.js'

const contratosRouter = Router();

contratosRouter.post('/', async (req: Request <{},{}, CreateContratoInput>, res: Response) => {
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
    const contrato = await prisma.contrato.create({data:{fileName, type, filePath}})
     return res.status(201).json(contrato);   
} );

contratosRouter.get('/', async (req: Request, res: Response) => {
    const contratos = await prisma.contrato.findMany();
    return res.status(200).json(contratos);
})

contratosRouter.get('/:id', async (req: Request<{id: string}>, res: Response) => {
    const { id } = req.params
     if (!validate(id)) {
         return res.status(400).json({ erro: 'deve ser um UUID válido' })
     }  const contrato = await prisma.contrato.findUnique({where: {id}})
      if (!contrato) { return res.status(404).json({erro: 'contrato: não encontrado'})}  
     return res.status(200).json(contrato);
})

contratosRouter.delete('/:id', async (req: Request<{id: string}>, res: Response) => {
    const { id } = req.params
     if (!validate(id)) {
         return res.status(400).json({ erro: 'deve ser um UUID válido' });
     } 
     const resultado = await prisma.contrato.deleteMany({where:{id}})
     if (resultado.count === 0) {
        return res.status(404).json({ erro: 'contrato: não encontrado' })
     }
        return res.status(204).send();
})


export default contratosRouter;