const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log(`Rodando na porta ${port}`));

const connection = require('./db_config');

app.post('/usuarios/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.endereco,
    );
    let query = "INSERT INTO usuarios(nome,email,senha,endereco) VALUES(?,?,?,?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })
})

app.post('/usuarios/listar', (request, response) => {
    let params = Array(
        request.body.email,
        request.body.senha,
        request.body.nome
    );

    const query = "SELECT * FROM usuarios WHERE email = (?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })

})

app.put('/usuarios/editar/:id', (request, response) => {
    let params = Array(
        request.body.name,
        request.params.id
    );
    let query = "UPDATE usuarios SET nome = ? WHERE usuarioid = ?";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })

})

app.delete('/usuarios/deletar/:id', (request, response) => {
    let params = Array(
        request.params.id,
    );
    let query = "DELETE FROM usuarios WHERE usuarioid = ?;"

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })

})



app.post('/produtos/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.descricao,
        request.body.preco,
        request.body.estoque,
    );
    let query = "INSERT INTO produtos(nome,descricao,preco,estoque) VALUES(?,?,?,?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })
})

app.put('/produtos/editar/:id', (request, response) => {
    let params = Array(
        request.body.name,
        request.params.id
    );
    let query = "UPDATE produtos SET Nome = ? WHERE produtoid = ?";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })

})

app.post('/produtos/listar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.descricao,
        request.body.preco,
        request.body.estoque
    );

    const query = "SELECT * FROM produtos WHERE nome = (?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })

})

app.delete('/produtos/deletar/:id', (request, response) => {
    let params = Array(
        request.params.id,
    );
    let query = "DELETE FROM produtos WHERE produtoid = ?;"

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "falha",
                    data: err
                })
        }
    })

})