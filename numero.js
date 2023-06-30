
function verificanumeroPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  

  const usuario = prompt("Digite um número inteiro positivo:");
  

  const numero = parseInt(usuario);
  

  if (numero < 0) {
    alert("Não é possível verificar se este número é primo.");
  } else {

    const eNumeroPrimo = verificanumeroPrimo(numero);
  
    if (eNumeroPrimo) {
      alert(`${numero} é um número primo.`);
    } else {
      alert(`${numero} não é um número primo.`);
    }
  }
  