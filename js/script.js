/*Autor: Jorge Marcelo
Data de Criação: 10/10/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Comunicação do HTML com o DOM*/
const buttons = document.querySelectorAll(".button-option");
const newGame = document.querySelector(".new-game");
const newGameBtn = document.getElementById("new-game");
const resetBtn = document.getElementById("reset");
const mensagem = document.getElementById("mensagem");

/*Padrões de vitoria*/
let padraoVitorias = [
[0, 1, 2],
[0, 3, 6],
[2, 5, 8],
[6, 7, 8],
[3, 4, 5],
[1, 4, 7],
[0, 4, 8],
[2, 4, 6],
];

/*Variaveis de jogador e jogadas*/
let jogador = true;
contadorjogadas = 0;

/*Função que desabilita botãp*/
const desabilitarBotoes = () => {
buttons.forEach((elemento) => (elemento.disabled = true));
newGame.classList.remove("hide");
};

/*Função que abilita botões*/
const habilitarBotoes = () => {
buttons.forEach((elemento) => {
elemento.innerText = "";
elemento.disabled = false;
});
newGame.classList.add("hide");
};

/*Função que mostra a mensagem de vitoria ou empate*/
const mensagemVitoria = (letra) => {
desabilitarBotoes();
if (letra == "X") {
mensagem.innerHTML = "O jogador Venceu";
} else {
mensagem.innerHTML = " A CPU Venceu";
}
};
const empate = () => {
desabilitarBotoes();
mensagem.innerHTML = "Empate";
};

/*Botão de new game  e rest*/
newGameBtn.addEventListener("click", () => {
contadorjogadas = 0;
habilitarBotoes();
mensagem.innerHTML = "";
});

resetBtn.addEventListener("click", () => {
contadorjogadas = 0;
habilitarBotoes();
mensagem.innerHTML = "";
});

/*Função para verificar se há um vencedor após cada jogada*/
const checarVencedor = () => {
/*Loop através de todas as combinações de padrões de vitória */
for (let i of padraoVitorias) {
let [elemento1, elemento2, elemento3] = [
buttons[i[0]].innerText,
buttons[i[1]].innerText,
buttons[i[2]].innerText,
];

/*  Verifica se todas as células da combinação de padrão estão 
preenchidas e se têm o mesmo conteúdo*/
if (elemento1 != "" && elemento2 != "" && elemento3 != "") {
if (elemento1 == elemento2 && elemento2 == elemento3) {
/* Se todas as três células tiverem o mesmo conteúdo, chama 
a função de vitória com o conteúdo (X ou O)*/

mensagemVitoria(elemento1);
}
}
}
};

/*Event listeners para os botões do jogo (células do jogo)*/
buttons.forEach((elemento) => {
elemento.addEventListener("click", () => {
if (jogador) {
jogador = false;
elemento.innerText = "X";
elemento.disabled = true;
} else {
jogador = true;
elemento.innerHTML = "O";
elemento.disabled = true;
}

/*Incrementa a contagem de movimentos*/
contadorjogadas += 1;

/*Se as jogadas forem 9 será empate*/
if (contadorjogadas == 9) empate();
checarVencedor();
});
});

/*Habilita todos os botões assim que a pagina é carregada*/
window.onload = habilitarBotoes;

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink) {
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function () {
threads(threadsLink);
});

/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink) {
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function () {
linkedin(linkedinLink);
});

/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink) {
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function () {
github(githubLink);
});
