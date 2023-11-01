function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo == 'pista') {
        comprarPista(qtd);
    } else if (tipo == 'superior') {
        comprarCadeiraSuperior(qtd);
    } else {
        comprarCadeiraInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para ingressos na Pista!');
    } else {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra de ingressos realizada com sucesso!');
    }
}

function comprarCadeiraSuperior(qtd) {
    let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdCadeiraSuperior) {
        alert('Quantidade indisponível para ingressos na Cadeira Superior!');
    } else {
        qtdCadeiraSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdCadeiraSuperior;
        alert('Compra de ingressos realizada com sucesso!');
    }
}

function comprarCadeiraInferior(qtd) {
    let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdCadeiraInferior) {
        alert('Quantidade indisponível para ingressos na Cadeira Inferior!');
    } else {
        qtdCadeiraInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdCadeiraInferior;
        alert('Compra de ingressos realizada com sucesso!');
    }
}