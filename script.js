document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

 
    botaoDeAcessibilidade.addEventListener('click', function (e) {
        e.preventDefault();
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1; 
    const tamanhoMinimo = 0.8;
    const tamanhoMaximo = 2;

    aumentaFonteBotao.addEventListener('click', function (e) {
        e.preventDefault();
        if (tamanhoAtualFonte < tamanhoMaximo) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function (e) {
        e.preventDefault();
        if (tamanhoAtualFonte > tamanhoMinimo) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });
});
