const roteador = require('express').Router()
const { application } = require('express')
const TabelaFornecedor = require('./ModeloTabelaFornecedor')

roteador.use('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )  
})

module.exports = roteador
