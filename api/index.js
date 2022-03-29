const express = require('express')
const app = express()
const bodyPasers = require('body-parser')
const config = require('config')

app.use(bodyPasers.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))