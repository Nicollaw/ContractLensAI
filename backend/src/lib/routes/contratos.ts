import express, { Request, Response } from 'express';

const app = express();

app.post('/contrato', (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Contrato recebido' });
});

export default app;