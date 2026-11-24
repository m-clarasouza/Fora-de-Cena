// =========================================================
// ABOUT.JS — Página "Sobre Nós" (about.html)
// Animação: os números da secção "Números" contam de 0
// até ao valor final quando a página abre.
// =========================================================

// 1. Procurar a secção dos números na página
const seccaoNumeros = document.getElementById('numeros');

// 2. Só continuar se a secção existir (evita erros na consola
//    noutras páginas, como pede o professor)
if (seccaoNumeros) {

  // 3. Apanhar todos os <p class="numero-valor"> (30, 14 e 25)
  const valores = seccaoNumeros.querySelectorAll('.numero-valor');

  // 4. Fazer a contagem para cada número
  valores.forEach(function (elemento) {
    contarAte(elemento);
  });
}


// Função que faz um número subir de 0 até ao valor escrito no HTML
function contarAte(elemento) {
  const valorFinal = Number(elemento.textContent); // ex: "30" -> 30
  let valorAtual = 0;

  elemento.textContent = valorAtual; // começa a mostrar 0

  // setInterval repete o código de 50 em 50 milissegundos
  const contador = setInterval(function () {
    valorAtual = valorAtual + 1;
    elemento.textContent = valorAtual;

    // Quando chega ao valor final, pára de repetir
    if (valorAtual >= valorFinal) {
      clearInterval(contador);
    }
  }, 50);
}
