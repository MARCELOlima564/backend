import express from 'express';//Serve para escultar as esquicicoes
import { config } from 'dotenv';//Serve para ler o arquivo .env

config(); //Lê o arquivo .env

const port = process.env.PORT || 5000; //Define a porta que será usada

const app = express();//Cria o servidor
app.use(express.json());//Permite que o servidor entenda requicições do JSON

app.get("/", (req, res) =>{
    // Rota inicial
    res.status(200).json({message: "Hello, GET!"});
});

app.post("/", (req, res) =>{
    // Rota inicial
    res.status(200).json({message: "Hello, POST!"});
});
app.delete("/", (req, res) =>{
    // Rota inicial
    res.status(200).json({message: "Hello, DELETE!"});
});
app.put("/", (req, res) =>{
    // Rota inicial
    res.status(200).json({message: "Hello, PUT!"});
});

    app.listen(port, () =>{
        //Inicia o servidor
        console.log(`Server started on http://localhost:${port}`);
    
})
