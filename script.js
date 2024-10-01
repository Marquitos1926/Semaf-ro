let luzAtual = 0;

//função que muda as luzes pelos IDs
function mudarLuz() {
    //Obtem as luzes 
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');

    //remove a classe 'active' de todas as luzes (desliga todas)
    vermelho.classList.remove('active');
    amarelo.classList.remove('active');
    verde.classList.remove('active');

    //verifica qual luz dece estar acessa
    if (luzAtual === 0) {
        vermelho.classList.add('active'); //Acende a luz vermelha
    } else if (luzAtual === 1) {
        amarelo.classList.add('active'); //Acende a luz amarela
    } else if (luzAtual === 2) {
        verde.classList.add('active'); //Acende a luz verde
    }

    luzAtual = (luzAtual + 1) % 3;
}

setInterval(mudarLuz, 2000);