
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
  res.send('Para definir um numero entre no em localhost:3000/inicio/fim')
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
    res.send("Por favor, defina um número.")
  }

  numeroStr = numero.toString();
  if(req.params['numero'] === numeroStr){
    res.send("Acertou mizeravi!!!");
  }
  else{
    res.send("EROUUUU!");
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
