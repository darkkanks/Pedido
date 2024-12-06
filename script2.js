
document.getElementById('pedir-namoro').addEventListener('click', function() {
  var resposta = prompt("Quer ser minha namorada?");
  if (resposta.toLowerCase() === "sim") {
    criarChuvaDeCoracoes();
    window.open("https://w.app/fJG29R", '_blank');
    document.getElementById('resposta').innerHTML = "Eu amo você!";
  } else {
    document.getElementById('resposta').innerHTML = "Não foi dessa vez...";
  }
});

function criarChuvaDeCoracoes() {
  for (var i = 0; i < 50; i++) {
    var coracao = document.createElement('div');
    coracao.className = 'coracao';
    coracao.innerHTML = '♥️';
    coracao.style.position = 'absolute';
    coracao.style.top = Math.random() * 100 + '%';
    coracao.style.left = Math.random() * 100 + '%';
    coracao.style.fontSize = '24px';
    coracao.style.color = '#ff69b4';
    document.body.appendChild(coracao);
    setTimeout(function() {
      coracao.remove();
    }, 2000);
  }
}
