const dataInicio = new Date("2024-08-10T00:00:00");

function atualizaContagem(){
    //pega a data atual
    const agora = new Date();

    //define a data atual
    let anoAtual = agora.getFullYear();
    let mesAtual = agora.getMonth();
    let diaAtual = agora.getDate();
    let horaAtual = agora.getHours();
    let minutoAtual = agora.getMinutes();
    let segundoAtual = agora.getSeconds();

    //define a data do início do namoro
    let anoInicio = dataInicio.getFullYear();
    let mesInicio = dataInicio.getMonth();
    let diaInicio = dataInicio.getDate();
    let horaInicio = dataInicio.getHours();
    let minutoInicio = dataInicio.getMinutes();
    let segundoInicio = dataInicio.getSeconds();

    //converte os anos em meses
    let meses = (anoAtual - anoInicio) * 12 + (mesAtual - mesInicio);

    //pega os dias
    let dias = diaAtual - diaInicio;

    //dias negativos
    if (dias < 0) {
        //reduz um mes
        meses--;
        const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate(); // Último dia do mês anterior
        dias += ultimoDiaMesAnterior;
    }

    //converte os meses em anos inteiros
    const anos = Math.floor(meses / 12);
    meses %= 12;

    //ajusta hora
    let horas = horaAtual - horaInicio;
    if (horas < 0) {
        dias--;
        horas += 24;
    }

    //ajusta minuto
    let minutos = minutoAtual - minutoInicio;
    if (minutos < 0) {
        horas--;
        minutos += 60;
    }

    //ajusta segundo
    let segundos = segundoAtual - segundoInicio;
    if (segundos < 0) {
        minutos--;
        segundos += 60;
    }

    const contagem = `${anos > 0 ? anos + " anos, " : ""}
                      ${meses} meses,
                      ${dias} dias, 
                      ${horas} horas, 
                      ${minutos} minutos e 
                      ${segundos} segundos`;
    document.getElementById("contagem").textContent = contagem;
}

let mensagemAberta = false;

function mostrarMensagem(mensagem) {
    const elementoMensagem = document.getElementById("mensagem");

    if (!mensagemAberta){
        elementoMensagem.textContent = mensagem;
    } else {
        elementoMensagem.textContent = "";
    }

    mensagemAberta = !mensagemAberta;
}

let indiceAtual = 0;

function mostrarImagem(indice) {
    const imagens = document.querySelectorAll(".carrossel .imagens img");
    imagens.forEach((img, i) => {
        img.classList.remove("ativa"); 
        if (i === indice) {
            img.classList.add("ativa"); 
        }
    });
}

function mudarImagem(direcao) {
    const imagens = document.querySelectorAll(".carrossel .imagens img");
    const totalImagens = imagens.length;
    indiceAtual = (indiceAtual + direcao + totalImagens) % totalImagens; 
    mostrarImagem(indiceAtual);
}

mostrarImagem(indiceAtual);

setInterval(atualizaContagem, 1000);

atualizaContagem();

