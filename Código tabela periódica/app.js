const categorias = {
  "nao-metal": {
    nome: "Não metal",
    cor: "#75e6a4"
  },
  "gas-nobre": {
    nome: "Gás nobre",
    cor: "#65c7ff"
  },
  "metal-alcalino": {
    nome: "Metal alcalino",
    cor: "#ff7f7f"
  },
  "alcalino-terroso": {
    nome: "Alcalino-terroso",
    cor: "#ffc66d"
  },
  "metaloide": {
    nome: "Metaloide",
    cor: "#a3e635"
  },
  "halogenio": {
    nome: "Halogênio",
    cor: "#67e8f9"
  },
  "metal-transicao": {
    nome: "Metal de transição",
    cor: "#f9a8d4"
  },
  "pos-transicao": {
    nome: "Metal pós-transição",
    cor: "#c4b5fd"
  },
  "lantanideo": {
    nome: "Lantanídeo",
    cor: "#fde047"
  },
  "actinideo": {
    nome: "Actinídeo",
    cor: "#fb923c"
  },
  "desconhecido": {
    nome: "Propriedade desconhecida",
    cor: "#cbd5e1"
  }
};

// Formato:
// [número, símbolo, nome, massa, coluna, linha, categoria]

const elementos = [
  [1, "H", "Hidrogênio", "1,008", 1, 1, "nao-metal"],
  [2, "He", "Hélio", "4,0026", 18, 1, "gas-nobre"],

  [3, "Li", "Lítio", "6,94", 1, 2, "metal-alcalino"],
  [4, "Be", "Berílio", "9,0122", 2, 2, "alcalino-terroso"],
  [5, "B", "Boro", "10,81", 13, 2, "metaloide"],
  [6, "C", "Carbono", "12,011", 14, 2, "nao-metal"],
  [7, "N", "Nitrogênio", "14,007", 15, 2, "nao-metal"],
  [8, "O", "Oxigênio", "15,999", 16, 2, "nao-metal"],
  [9, "F", "Flúor", "18,998", 17, 2, "halogenio"],
  [10, "Ne", "Neônio", "20,180", 18, 2, "gas-nobre"],

  [11, "Na", "Sódio", "22,990", 1, 3, "metal-alcalino"],
  [12, "Mg", "Magnésio", "24,305", 2, 3, "alcalino-terroso"],
  [13, "Al", "Alumínio", "26,982", 13, 3, "pos-transicao"],
  [14, "Si", "Silício", "28,085", 14, 3, "metaloide"],
  [15, "P", "Fósforo", "30,974", 15, 3, "nao-metal"],
  [16, "S", "Enxofre", "32,06", 16, 3, "nao-metal"],
  [17, "Cl", "Cloro", "35,45", 17, 3, "halogenio"],
  [18, "Ar", "Argônio", "39,948", 18, 3, "gas-nobre"],

  [19, "K", "Potássio", "39,098", 1, 4, "metal-alcalino"],
  [20, "Ca", "Cálcio", "40,078", 2, 4, "alcalino-terroso"],
  [21, "Sc", "Escândio", "44,956", 3, 4, "metal-transicao"],
  [22, "Ti", "Titânio", "47,867", 4, 4, "metal-transicao"],
  [23, "V", "Vanádio", "50,942", 5, 4, "metal-transicao"],
  [24, "Cr", "Crômio", "51,996", 6, 4, "metal-transicao"],
  [25, "Mn", "Manganês", "54,938", 7, 4, "metal-transicao"],
  [26, "Fe", "Ferro", "55,845", 8, 4, "metal-transicao"],
  [27, "Co", "Cobalto", "58,933", 9, 4, "metal-transicao"],
  [28, "Ni", "Níquel", "58,693", 10, 4, "metal-transicao"],
  [29, "Cu", "Cobre", "63,546", 11, 4, "metal-transicao"],
  [30, "Zn", "Zinco", "65,38", 12, 4, "metal-transicao"],
  [31, "Ga", "Gálio", "69,723", 13, 4, "pos-transicao"],
  [32, "Ge", "Germânio", "72,630", 14, 4, "metaloide"],
  [33, "As", "Arsênio", "74,922", 15, 4, "metaloide"],
  [34, "Se", "Selênio", "78,971", 16, 4, "nao-metal"],
  [35, "Br", "Bromo", "79,904", 17, 4, "halogenio"],
  [36, "Kr", "Criptônio", "83,798", 18, 4, "gas-nobre"],

  [37, "Rb", "Rubídio", "85,468", 1, 5, "metal-alcalino"],
  [38, "Sr", "Estrôncio", "87,62", 2, 5, "alcalino-terroso"],
  [39, "Y", "Ítrio", "88,906", 3, 5, "metal-transicao"],
  [40, "Zr", "Zircônio", "91,224", 4, 5, "metal-transicao"],
  [41, "Nb", "Nióbio", "92,906", 5, 5, "metal-transicao"],
  [42, "Mo", "Molibdênio", "95,95", 6, 5, "metal-transicao"],
  [43, "Tc", "Tecnécio", "(98)", 7, 5, "metal-transicao"],
  [44, "Ru", "Rutênio", "101,07", 8, 5, "metal-transicao"],
  [45, "Rh", "Ródio", "102,91", 9, 5, "metal-transicao"],
  [46, "Pd", "Paládio", "106,42", 10, 5, "metal-transicao"],
  [47, "Ag", "Prata", "107,87", 11, 5, "metal-transicao"],
  [48, "Cd", "Cádmio", "112,41", 12, 5, "metal-transicao"],
  [49, "In", "Índio", "114,82", 13, 5, "pos-transicao"],
  [50, "Sn", "Estanho", "118,71", 14, 5, "pos-transicao"],
  [51, "Sb", "Antimônio", "121,76", 15, 5, "metaloide"],
  [52, "Te", "Telúrio", "127,60", 16, 5, "metaloide"],
  [53, "I", "Iodo", "126,90", 17, 5, "halogenio"],
  [54, "Xe", "Xenônio", "131,29", 18, 5, "gas-nobre"],

  [55, "Cs", "Césio", "132,91", 1, 6, "metal-alcalino"],
  [56, "Ba", "Bário", "137,33", 2, 6, "alcalino-terroso"],
  [72, "Hf", "Háfnio", "178,49", 4, 6, "metal-transicao"],
  [73, "Ta", "Tântalo", "180,95", 5, 6, "metal-transicao"],
  [74, "W", "Tungstênio", "183,84", 6, 6, "metal-transicao"],
  [75, "Re", "Rênio", "186,21", 7, 6, "metal-transicao"],
  [76, "Os", "Ósmio", "190,23", 8, 6, "metal-transicao"],
  [77, "Ir", "Irídio", "192,22", 9, 6, "metal-transicao"],
  [78, "Pt", "Platina", "195,08", 10, 6, "metal-transicao"],
  [79, "Au", "Ouro", "196,97", 11, 6, "metal-transicao"],
  [80, "Hg", "Mercúrio", "200,59", 12, 6, "metal-transicao"],
  [81, "Tl", "Tálio", "204,38", 13, 6, "pos-transicao"],
  [82, "Pb", "Chumbo", "207,2", 14, 6, "pos-transicao"],
  [83, "Bi", "Bismuto", "208,98", 15, 6, "pos-transicao"],
  [84, "Po", "Polônio", "(209)", 16, 6, "pos-transicao"],
  [85, "At", "Astato", "(210)", 17, 6, "halogenio"],
  [86, "Rn", "Radônio", "(222)", 18, 6, "gas-nobre"],

  [87, "Fr", "Frâncio", "(223)", 1, 7, "metal-alcalino"],
  [88, "Ra", "Rádio", "(226)", 2, 7, "alcalino-terroso"],
  [104, "Rf", "Rutherfórdio", "(267)", 4, 7, "metal-transicao"],
  [105, "Db", "Dúbnio", "(268)", 5, 7, "metal-transicao"],
  [106, "Sg", "Seabórgio", "(269)", 6, 7, "metal-transicao"],
  [107, "Bh", "Bóhrio", "(270)", 7, 7, "metal-transicao"],
  [108, "Hs", "Hássio", "(269)", 8, 7, "metal-transicao"],
  [109, "Mt", "Meitnério", "(278)", 9, 7, "desconhecido"],
  [110, "Ds", "Darmstádtio", "(281)", 10, 7, "desconhecido"],
  [111, "Rg", "Roentgênio", "(282)", 11, 7, "desconhecido"],
  [112, "Cn", "Copernício", "(285)", 12, 7, "desconhecido"],
  [113, "Nh", "Nihônio", "(286)", 13, 7, "desconhecido"],
  [114, "Fl", "Fleróvio", "(289)", 14, 7, "desconhecido"],
  [115, "Mc", "Moscóvio", "(290)", 15, 7, "desconhecido"],
  [116, "Lv", "Livermório", "(293)", 16, 7, "desconhecido"],
  [117, "Ts", "Tenessino", "(294)", 17, 7, "halogenio"],
  [118, "Og", "Oganessônio", "(294)", 18, 7, "gas-nobre"],

  [57, "La", "Lantânio", "138,91", 3, 8, "lantanideo"],
  [58, "Ce", "Cério", "140,12", 4, 8, "lantanideo"],
  [59, "Pr", "Praseodímio", "140,91", 5, 8, "lantanideo"],
  [60, "Nd", "Neodímio", "144,24", 6, 8, "lantanideo"],
  [61, "Pm", "Promécio", "(145)", 7, 8, "lantanideo"],
  [62, "Sm", "Samário", "150,36", 8, 8, "lantanideo"],
  [63, "Eu", "Európio", "151,96", 9, 8, "lantanideo"],
  [64, "Gd", "Gadolínio", "157,25", 10, 8, "lantanideo"],
  [65, "Tb", "Térbio", "158,93", 11, 8, "lantanideo"],
  [66, "Dy", "Disprósio", "162,50", 12, 8, "lantanideo"],
  [67, "Ho", "Hólmio", "164,93", 13, 8, "lantanideo"],
  [68, "Er", "Érbio", "167,26", 14, 8, "lantanideo"],
  [69, "Tm", "Túlio", "168,93", 15, 8, "lantanideo"],
  [70, "Yb", "Itérbio", "173,05", 16, 8, "lantanideo"],
  [71, "Lu", "Lutécio", "174,97", 17, 8, "lantanideo"],

  [89, "Ac", "Actínio", "(227)", 3, 9, "actinideo"],
  [90, "Th", "Tório", "232,04", 4, 9, "actinideo"],
  [91, "Pa", "Protactínio", "231,04", 5, 9, "actinideo"],
  [92, "U", "Urânio", "238,03", 6, 9, "actinideo"],
  [93, "Np", "Neptúnio", "(237)", 7, 9, "actinideo"],
  [94, "Pu", "Plutônio", "(244)", 8, 9, "actinideo"],
  [95, "Am", "Amerício", "(243)", 9, 9, "actinideo"],
  [96, "Cm", "Cúrio", "(247)", 10, 9, "actinideo"],
  [97, "Bk", "Berquélio", "(247)", 11, 9, "actinideo"],
  [98, "Cf", "Califórnio", "(251)", 12, 9, "actinideo"],
  [99, "Es", "Einstênio", "(252)", 13, 9, "actinideo"],
  [100, "Fm", "Férmio", "(257)", 14, 9, "actinideo"],
  [101, "Md", "Mendelévio", "(258)", 15, 9, "actinideo"],
  [102, "No", "Nobélio", "(259)", 16, 9, "actinideo"],
  [103, "Lr", "Laurêncio", "(266)", 17, 9, "actinideo"]
];

const tabela = document.querySelector("#tabela-periodica");
const legenda = document.querySelector("#legenda");
const pesquisa = document.querySelector("#pesquisa");
const resultado = document.querySelector("#resultado");
const limpar = document.querySelector("#limpar");
const modal = document.querySelector("#modal");
const detalhes = document.querySelector("#detalhes");
const fecharModal = document.querySelector("#fechar-modal");

let categoriaSelecionada = "todas";

function removerAcentos(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function criarLegenda() {
  const botaoTodos = document.createElement("button");
  botaoTodos.type = "button";
  botaoTodos.className = "filtro ativo";
  botaoTodos.dataset.categoria = "todas";
  botaoTodos.textContent = "Todos";
  legenda.appendChild(botaoTodos);

  Object.entries(categorias).forEach(([chave, categoria]) => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "filtro";
    botao.dataset.categoria = chave;
    botao.style.setProperty("--cor", categoria.cor);

    botao.innerHTML = `
      <span class="cor"></span>
      ${categoria.nome}
    `;

    legenda.appendChild(botao);
  });
}

function criarTabela() {
  elementos.forEach((elemento) => {
    const [numero, simbolo, nome, massa, coluna, linha, categoria] = elemento;
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "elemento";
    botao.dataset.numero = numero;
    botao.dataset.simbolo = simbolo;
    botao.dataset.nome = nome;
    botao.dataset.categoria = categoria;

    botao.style.setProperty("--coluna", coluna);
    botao.style.setProperty("--linha", linha);
    botao.style.setProperty("--cor", categorias[categoria].cor);

    botao.innerHTML = `
      <span class="numero">${numero}</span>
      <span class="simbolo">${simbolo}</span>
      <span class="nome">${nome}</span>
      <span class="massa">${massa}</span>
    `;

    botao.addEventListener("click", () => abrirDetalhes(elemento));
    tabela.appendChild(botao);
  });
}

function abrirDetalhes(elemento) {
  const [numero, simbolo, nome, massa, coluna, linha, categoria] = elemento;
  const periodo = linha <= 7 ? linha : linha === 8 ? 6 : 7;

  detalhes.innerHTML = `
    <div
      class="simbolo-grande"
      style="--cor: ${categorias[categoria].cor}"
    >
      ${simbolo}
    </div>

    <h2>${nome}</h2>

    <div class="dados">
      <div class="dado">
        <strong>Número atômico</strong>
        ${numero}
      </div>

      <div class="dado">
        <strong>Massa atômica</strong>
        ${massa}
      </div>

      <div class="dado">
        <strong>Categoria</strong>
        ${categorias[categoria].nome}
      </div>

      <div class="dado">
        <strong>Período</strong>
        ${periodo}
      </div>
    </div>
  `;

  modal.showModal();
}

function filtrar() {
  const termo = removerAcentos(pesquisa.value.trim());
  let quantidadeVisivel = 0;

  document.querySelectorAll(".elemento").forEach((elemento) => {
    const correspondeTexto =
      removerAcentos(elemento.dataset.nome).includes(termo) ||
      removerAcentos(elemento.dataset.simbolo).includes(termo) ||
      elemento.dataset.numero.includes(termo);

    const correspondeCategoria =
      categoriaSelecionada === "todas" ||
      elemento.dataset.categoria === categoriaSelecionada;

    const visivel = correspondeTexto && correspondeCategoria;

    elemento.classList.toggle("oculto", !visivel);

    if (visivel) {
      quantidadeVisivel++;
    }
  });

  resultado.textContent =
    quantidadeVisivel === 118
      ? "Exibindo todos os 118 elementos."
      : `${quantidadeVisivel} elemento(s) encontrado(s).`;
}

legenda.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".filtro");

  if (!botao) {
    return;
  }

  categoriaSelecionada = botao.dataset.categoria;

  document.querySelectorAll(".filtro").forEach((filtro) => {
    filtro.classList.toggle("ativo", filtro === botao);
  });

  filtrar();
});

pesquisa.addEventListener("input", filtrar);

limpar.addEventListener("click", () => {
  pesquisa.value = "";
  categoriaSelecionada = "todas";

  document.querySelectorAll(".filtro").forEach((filtro) => {
    filtro.classList.toggle(
      "ativo",
      filtro.dataset.categoria === "todas"
    );
  });

  filtrar();
  pesquisa.focus();
});

fecharModal.addEventListener("click", () => modal.close());

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.close();
  }
});

criarLegenda();
criarTabela();
filtrar();
