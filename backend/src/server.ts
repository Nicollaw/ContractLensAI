import express from 'express';
import contratosRouter from './routes/contratos.routes';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/contratos', contratosRouter);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});