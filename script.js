
var signoColecao = [
    { id: 1, nome: "Áries", resumo: "Quem tem sol em Áries costuma viver no agora; além de possuir um grande prazer em existir, ação e decisão também podem ser algumas de suas marcas. A liderança é uma característica forte no signo, que pode ser usada para o empreendedorismo.", caracteristica: "Tendência pelo imediatismo e pela impulsividade.", planeta: "Marte." },
    { id: 2, nome: "Touro", resumo: "Quem tem sol em Touro costuma não abrir mão do que traz conforto e bem-estar, mas pode ter a possessividade em evidência. O signo preza pela beleza física e pela gula. A satisfação de Touro vem do contato com todos os cinco sentidos.", caracteristica: "Apego e dificuldade em lidar com mudanças.", planeta: "Vênus" },
    { id: 3, nome: "Gêmeos", resumo: "Quem tem sol em Gêmeos costuma apreciar novas ideias, novos lugares e novas pessoas. Gêmeos tem carisma de sobra e tende a fazer amigos com muita facilidade. A superficialidade e a inconsequência também podem ser algumas das marcas do signo.", caracteristica: "Agilidade mental e efervescência de ideias.", planeta: "Mercúrio." },
    { id: 4, nome: "Câncer", resumo: "Quem tem sol em Câncer costuma buscar o que lhe traz segurança. O signo é maternal e emotivo e tem uma proximidade com o apego ao passado. Câncer costuma ter a intuição acentuada, sentir as coisas no ar e captar tudo logo no primeiro olhar.", caracteristica: "Instinto para agir com as emoções.", planeta: "Lua." },
    { id: 5, nome: "Leão", resumo: "Quem tem sol em Leão costuma amar plateias e aplausos. O signo tem a coragem e o humor como marcas registradas, mas também o orgulho e o autoritarismo. Leão geralmente valoriza as oportunidades e aproveita cada momento, sabe amar e ter generosidade.", caracteristica: "Irradia brilho natural.", planeta: "Sol." },
    { id: 6, nome: "Virgem", resumo: "Quem tem sol em Virgem costuma buscar constantemente a perfeição, tudo sempre poderia estar um pouco melhor. Signo observador, que costuma identificar o detalhe que ninguém mais percebe. Virgem tem praticidade e organização, mas também pode ser frio e cético.", caracteristica: "Consegue fazer as mudanças necessárias.", planeta: "Mercúrio." },
    { id: 7, nome: "Libra", resumo: "Quem tem sol em Libra costuma buscar sempre o equilíbrio e conviver com a indecisão. Regido por Vênus, o signo tem uma aproximação natural com as artes. Libra costuma ter ética, mas também pode ter vaidade em excesso e comportamentos considerados de “mau gosto”.", caracteristica: "Forte conexão com a racionalidade.", planeta: "Vênus." },
    { id: 8, nome: "Escorpião", resumo: "Quem tem sol em Escorpião costuma ter muita perspicácia, não é a toa que são naturalmente detetives. O sexto sentido do signo alerta para possíveis “perigos” logo de cara. Escorpião tem uma capacidade de regeneração única, mas também pode ter muitos ciúmes.", caracteristica: "Um oceano profundo e inexplorado.", planeta: "Plutão." },
    { id: 9, nome: "Sagitário", resumo: "Quem tem sol em Sagitário costuma ser viajante, sua casa é o mundo inteiro. O signo viaja muito também em sua própria mente. Não tente aprisionar Sagitário de nenhuma forma, ele não aceita limites. Otimista e jovial, pode ter exageros e uma dose de deboche.", caracteristica: "O agente da motivação.", planeta: "Júpiter." },
    { id: 10, nome: "Capricórnio", resumo: "Quem tem sol em Capricórnio costuma ter seus propósitos e metas bem definidos. Signo de praticidade que segue as regras do jogo tem total noção dos seus limites. Capricórnio é maduro e bem humorado, mas também pode ser frio nas relações e um tanto pessimista.", caracteristica: "Foco e paciência em suas metas.", planeta: "Saturno." },
    { id: 11, nome: "Aquário", resumo: "Quem tem sol em Aquário costuma ter a amizade como cartão de visita e ter uma conexão intensa com a liberdade. Signo idealista, tende a dar preferência aos diálogos racionais. Aquário é solidário e humano, também pode ser radical e bem “do contra”.", caracteristica: "O apreço pelo clássico.", planeta: "Urano." },
    { id: 12, nome: "Peixes", resumo: "Quem tem sol em Peixes costuma entender tudo sem precisar de muitas palavras, possuem uma sensibilidade superior. Signo compassivo e inspirador, Peixes tende a ter uma forte conexão com a espiritualidade, mas pode se iludir com certa facilidade.", caracteristica: "Um oceano de sentimentos.", planeta: "Netuno." }
]

function dataNascimento() {
    var dataNascimento = document.forms["formulario"]["data_nascimento"].value;
    var separador = "-";
    var dataArmazenada = splitDate(dataNascimento, separador);
    var diaNascimento = Number(dataArmazenada[2]);
    var mesNascimento = Number(dataArmazenada[1]);
    localStorage.setItem("diaNascimento", diaNascimento);
    localStorage.setItem("mesNascimento", mesNascimento);
}

function dataEscolhidaSigno() {
    var diaNascimento = localStorage.getItem("diaNascimento");
    var mesNascimento = localStorage.getItem("mesNascimento");

    if ((diaNascimento >= 21 && mesNascimento == 03) || (diaNascimento <= 20 && mesNascimento == 04)) {
        var posicao = 0;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }

    else if ((diaNascimento >= 21 && mesNascimento == 04) || diaNascimento <= 20 && mesNascimento == 05) {
        var posicao = 1;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }

    else if ((diaNascimento >= 21 && mesNascimento == 05) || diaNascimento <= 20 && mesNascimento == 06) {
        var posicao = 2;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }

   
    else if ((diaNascimento >= 21 && mesNascimento == 06) || diaNascimento <= 22 && mesNascimento == 07) {
        var posicao = 3;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }

    else if ((diaNascimento >= 23 && mesNascimento == 07) || diaNascimento <= 22 && mesNascimento == 08) {
        var posicao = 4;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }

    else if ((diaNascimento >= 23 && mesNascimento == 08) || diaNascimento <= 22 && mesNascimento == 09) {
        var posicao = 5;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }
    
    else if ((diaNascimento >= 23 && mesNascimento == 09) || diaNascimento <= 22 && mesNascimento == 10) {
        var posicao = 6;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }
    
    else if ((diaNascimento >= 23 && mesNascimento == 10) || diaNascimento <= 22 && mesNascimento == 11) {
        var posicao = 7;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }
    
    else if ((diaNascimento >= 22 && mesNascimento == 11) || diaNascimento <= 21 && mesNascimento == 12) {
        var posicao = 8;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }
    
    else if ((diaNascimento >= 22 && mesNascimento == 12) || diaNascimento <= 20 && mesNascimento == 01) {
        var posicao = 9;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }
    
    else if ((diaNascimento >= 21 && mesNascimento == 01) || diaNascimento <= 18 && mesNascimento == 02) {
        var posicao = 10;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }
    
    else if ((diaNascimento >= 19 && mesNascimento == 02) || diaNascimento <= 20 && mesNascimento == 03) {
        var posicao = 5;
        document.getElementById("nomeSigno").innerHTML = signoColecao[posicao].nome;
        document.getElementById("sobreSigno").innerHTML = signoColecao[posicao].resumo;
        document.getElementById("caracteristicasSigno").innerHTML = signoColecao[posicao].caracteristica;
        document.getElementById("planetaSigno").innerHTML = signoColecao[posicao].planeta;
    }

    else{
        alert("Algo deu errado. Tente novamente.");
    }
}

function splitDate(valor, separador) {
    var arrayValor = valor.split(separador);
    return arrayValor;
}
