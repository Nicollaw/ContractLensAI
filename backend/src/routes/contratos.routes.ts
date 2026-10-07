import { Request, Response, Router } from 'express';

const contratosRouter = Router();

contratosRouter.post('/', (req:Request, res:Response) =>{
    res.status(201).json(req.body);
    console.log('Rota funcionando!');
});


export default contratosRouter