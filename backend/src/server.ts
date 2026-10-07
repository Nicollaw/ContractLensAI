import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});