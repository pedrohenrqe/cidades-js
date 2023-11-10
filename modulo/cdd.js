var estados_cidade = require('./estados_cidades')

const getListaDeEstados = function(){  
     const arrayEstados = []

     const JsonEstados = {}
     
     estados_cidade.estadosCidades.estados.forEach(estado => {

          arrayEstados.push(estado.sigla)
});

 JsonEstados.uf = arrayEstados
 JsonEstados.quantidade = arrayEstados.length

 return JsonEstados
}
getListaDeEstados()

const getDadosEstado = function(siglaEstado){ 
     const estado = siglaEstado
     const jsonEstado = {}

     estados_cidade.estadosCidades.estados.forEach(pEstado => {
           if(estado == pEstado.sigla){
               jsonEstado.uf = pEstado.sigla
               jsonEstado.descricao = pEstado.nome
               jsonEstado.capital = pEstado.capital
               jsonEstado.regiao = pEstado.regiao
          } 
     });

      return jsonEstado
}

const getCapitalEstado = function(siglaEstado){
     const estado = siglaEstado
     const jsonCapEstado = {}

     estados_cidade.estadosCidades.estados.forEach(cEstado => {
           if(estado == cEstado.sigla){
               jsonCapEstado.uf = cEstado.sigla
               jsonCapEstado.descricao = cEstado.nome
               jsonCapEstado.capital = cEstado.capital
          } 
     });

     return jsonCapEstado
}

const getEstadosRegiao = function(regiao){
     const eRegiao = regiao
     const estados = []
     
     estados_cidade.estadosCidades.estados.forEach(estadosR => {
          const jsonEstadosRegiao = {}

          if(eRegiao == estadosR.regiao){
               jsonEstadosRegiao.uf = estadosR.sigla
               jsonEstadosRegiao.descricao = estadosR.nome  
               estados.push(jsonEstadosRegiao)    
          }
          
     })
     const jsonRegiao = {}
     jsonRegiao.regiao = eRegiao
     jsonRegiao.estados = estados

     return jsonRegiao
}

const getCapitalPais = function(){
     const capitais = []
    
     
     estados_cidade.estadosCidades.estados.forEach(estadosCap => {
         
     
         if(estadosCap.capital_pais?.capital != null){
          jsonEstadosCap = {}
          jsonEstadosCap.capital_atual = estadosCap.capital_pais?.capital
          jsonEstadosCap.uf = estadosCap.sigla
          jsonEstadosCap.descricao = estadosCap.nome
          jsonEstadosCap.capital = estadosCap.capital
          jsonEstadosCap.regiao = estadosCap.regiao
          jsonEstadosCap.capital_pais_ano_inicio = estadosCap.capital_pais?.ano_inicio
          jsonEstadosCap.capital_pais_ano_termino = estadosCap.capital_pais?.ano_fim
          
          capitais.push(jsonEstadosCap)
          }
          
     });
     const jsonCapital = {}

     jsonCapital.capitais = capitais

     return jsonCapital
    

}

const getCidades = function(siglaEstadoC){
     jsonCidades = {}
     arrayCidades = []
     const siglaC = siglaEstadoC

     estados_cidade.estadosCidades.estados.forEach(estados => {
          
          if(siglaC == estados.sigla){
               jsonCidades.uf = estados.sigla
               jsonCidades.descricao = estados.nome
               jsonCidades.quantidade_cidades = estados.cidades.length

               estados.cidades.forEach(cidadesM => {
                    arrayCidades.push(cidadesM.nome)                    
               });

               jsonCidades.cidades = arrayCidades
          }          

     
     })
     return jsonCidades
}

module.exports = {
     getListaDeEstados,
     getDadosEstado,
     getCapitalEstado,
     getCapitalPais,
     getEstadosRegiao,
     getCidades
}