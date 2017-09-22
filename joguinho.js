
const express = require('express')
const app = express()
let numInicio = 0;
let numFim = 0;
let numero = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

app.get('/help', (req, res) => {
  res.send('Para definir um numero entre em: localhost:3000/update/inicio/fim ou tente acertar em localhost:3000/guess/numero')
  console.log("entrou na rota help");
})

app.get('/update/:inicio/:fim', (req, res) => {
  numInicio = req.params['inicio'];
  numFim = req.params['fim'];

  res.send("Numeros definidos com sucesso!!");

  numero = getRandomInt(numInicio, numFim);

  console.log("Numero sorteado:" + numero);

})

app.get('/guess/:numero', (req, res) => {

  if (numInicio==0 || numFim == 0){
    res.send("Por favor, defina um número: localhost:3000/update/inicio/fim")
  }

  numeroStr = numero.toString();

  if(req.params['numero'] === numeroStr){
    res.sendFile(__dirname + '/acertou.jpg');
    //res.send("Acertou mizeravi!!!");
  }

  else if(parseInt(req.params['numero']) > numFim){

    res.send("Numero maior que o intervalo definido!")    
  }

  else{
  //  res.send("EROUUUU!");
  res.sendFile(__dirname + '/errou.jpg');

  }
})

app.listen(3000, function () {
  console.log('Servidor rodando!')
})
