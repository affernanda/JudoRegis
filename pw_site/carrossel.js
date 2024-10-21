let linhaIndex = 0; // Inicializa o índice da linha atual

function mostrarLinhas() {
    const linhas = document.querySelectorAll('.linha'); // Seleciona todas as linhas
    linhas.forEach((linha, index) => {
        linha.style.display = index === linhaIndex ? 'flex' : 'none'; // Exibe apenas a linha atual
    });
}

function mudarLinha(n) {
    const linhas = document.querySelectorAll('.linha'); // Seleciona todas as linhas
    linhaIndex = (linhaIndex + n + linhas.length) % linhas.length; // Atualiza o índice da linha atual
    mostrarLinhas(); // Atualiza a exibição das linhas
}

// Inicia mostrando a primeira linha
mostrarLinhas();