const express = require("express");
const app = express();

app.use(express.json()); //Sinaliza que o Express que o body das requisições estará sempre estruturado en json

//Endpoint "/"
app.get("/", function (req, res) {
    res.send("Hello World");
});

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

//[GET] "/herois" -Read All ler todos os registros
app.get("/herois", function (req, res) {
    res.send(lista);
});

//[GET] "/herois/:id" -Read Single (by id) ler um registro por id.
app.get("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = lista[id];

    res.send(item);
});

//[POST] "/herois" Create - Criar um registro
app.post("/herois", function (req, res) {
    const item = req.body.nome;

    lista.push(item);

    res.send("Item adicionado com sucesso");
});

//[PUT] "/heoris/:id" Update- atualiza um registro
app.put("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = req.body;

    lista[id] = item.nome;

    res.send("Atualizado com sucesso");
});

//[DELETE] "/herois/:id" Delete - Remover um registro
app.delete("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    delete lista[id];

    res.send("Deletado com sucesso");
});

app.listen(3000);