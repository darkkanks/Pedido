
const nomeNamorado = document.getElementById('nome-namorado');
const seuNome = document.getElementById('seu-nome');
const seusObjetivos = document.getElementById('seus-objetivos');
const nivelSatisfacao = document.getElementById('nivel-satisfacao');
const enviar = document.getElementById('enviar');
const mensagemErro = document.getElementById('mensagem-erro');

enviar.addEventListener('click', () => {
  const nome = nomeNamorado.value.trim();
  const objetivos = seusObjetivos.value;
  const nivel = nivelSatisfacao.value;

  if (nome.toLowerCase() === 'vinicius') {
    window.location.href = 'index2.html'; // Altere para o link desejado
  } else {
    mensagemErro.innerText = 'Oops, parece que você errou... Não é mesmo?';
  }
});
