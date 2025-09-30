const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A densidade demografica do brasil, é desigual sendo altamente populosa sem certas areas e pouco poupulosa em outras.",
        alternativas: [
            {
                texto: "São Paulo!",
                afirmacao: "São Paulo tem 46,1 milhões de habitantes, sendo o estado mais populoso."
            },
            {
                texto: "Rio de Janeiro!",
                afirmacao: "Rio de Janeiro um dos estados mais populosos do Brasil."
            }
        ]
    },
    {
        enunciado: "Com isso devido a a má destribuição, em grandes cidades o super lotmento urbano causa sérios problemas?",
        alternativas: [
            {
                texto: "Problemas sociais e ambientais.",
                afirmacao: "Grandes centros urbanos sofrem com deslizamentos e problemas sociais, devido a essa má destribuição."
            },
            {
                texto: "Alta demanda pela população.",
                afirmacao: "Com a alta demanda da população os grandes centros urbanos ao suprir essas necessidades a população de mas capital acaba se sobresaindo da classe mais baixa."
            }
        ]
    },
    {
        enunciado: "Falta de oportunidaes?",
        alternativas: [
            {
                texto: "A dispariedade nas oportuniades.",
                afirmacao: "A despariedade de empregos com a falta de oportunidaes para os de classe baixa, empregos de risco lhe são propostos, assim correndo riscos. Já para os de classe mais alta as oportunidades são maiores."
            },
            {
                texto: "Disputa por empregos.",
                afirmacao: "Com a disputa por esss empregos, pessoas com menos condições recorrem a empregos de riscos enquanto pessoas com mais oportumidades são empregados com mais facilidade e de mais segurança."
            }
        ]
    },
    {
        enunciado: "A procura por mais oportunidades?",
        alternativas: [
            {
                texto: "Exodo rural.",
                afirmacao: "O exodo rural a principal saída que eles tem que é a saída do campo para cidade por busca de novas oportunidades."
            },
            {
                texto: "Falta de renda.",
                afirmacao: "A falta de rende na area rural causa desanimo e preocupaçoes nas pessoas que se obrigam a ir para as cidades em busca de melhores condições!"
            }
        ]
    },
    {
        enunciado: "O que acontece ao não conseguir melhoras na condição de vida",
        alternativas: [
            {
                texto: "Voltam para o campo.",
                afirmacao: "As situações pioram que se veem obrigados a voltar para o campo."
            },
            {
                texto: "Ficam na cidade.",
                afirmacao: "Muitos se sentem obrigados a ficar, pois venderam seus bens para ir a cidade, muitos ficam em situações de extrema pobreza e vivem o mesmo ciclo que antes viviam. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();
