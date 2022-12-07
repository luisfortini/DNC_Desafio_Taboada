function Tabuada() {
  var num = document.getElementById('num').value
  var qtdeVezes = document.getElementById('qtdeVezes').value

  if (num == 0 || qtdeVezes == 0) {
    alert('Preencha todos os campos')
  } else {
    var resposta = ''
    var elementResposta = document.getElementById('resposta')
    elementResposta.innerHTML = 'A tabuada do ' + num + ' é:<br> '
    var contador = 0

    do {
      resposta = num * contador
      elementResposta.innerHTML +=
        num + ' x ' + contador + ' = ' + resposta + '<br>'
      contador++
    } while (contador <= qtdeVezes)
  }
}
