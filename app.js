/**********************************************************************************************************************************
* Objetivo: Criar uma API para responder dados de Estados e Cidades                                                               *
* Data: 10/11/23                                                                                                                  *
* Autor: Pedro Barbosa                                                                                                            *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

/*
* Instalações das dependencias para criação da APi
*
* express - npm install express --save
        Dependencia do node para auxiliar na criação de APi 
* cors - npm install cors
        Dependencia para manipular recursos de acesso, permissões, etc da API
* body-parser  - npm install body-parser
        Dependencia para auxiliar na chegada de dados API
*
*
*/

// Import das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

// Cria um objeto app tendo como referência a classe do express
const app = express();

// request - Receber dados
// responsive - Devolve dados

// Função para configurar as permissões do cors
app.use((request , response, next)=>{
    // Configura quem poderá fazer a requisições na API (* - Libera para todos | IP restringe o acesso)
    response.header('Acess-Control-Allow-Origin', '*');
    // Configura os metódos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods', 'GET');

    app.use(cors());

    next();
})

// EndPoints: Listar a sigla de todos os Estados
app.get('/estados/sigla', cors(), async function(request, response, next){
    let controleListaEstados = require('./modulo/cdd.js')
    let estados = controleListaEstados.getListaDeEstados()
    response.json(estados)
    response.status(200)
})

// Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')
})
