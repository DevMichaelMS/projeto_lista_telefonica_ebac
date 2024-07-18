const form = document.getElementById('form-add');
const emojiCelular = '\uD83D\uDCF1'; // 📱
const emojiResidencial = '\u260E'; // ☎️
const nomes = [];
const DDDs = [];
const telefones = [];
const tipos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaQuantidadeContatos();
});

function adicionaLinha() {
    const inputNome = document.getElementById('name');
    const inputDDD = document.getElementById('DDD');
    const inputPhone = document.getElementById('phone');
    const isCelular = document.getElementById('cell').checked;
    const isResidencial = document.getElementById('residencial').checked;

    if (nomes.includes(inputNome.value) || telefones.includes(inputPhone.value)) {
        alert('Nome ou número de telefone já adicionado!');
        return;
    }

    let tipo = '';
    if (isCelular) {
        tipo = 'Celular';
    } else if (isResidencial) {
        tipo = 'Residencial';
    } else {
        alert('Selecione o tipo de telefone: Celular ou Residencial');
        return;
    }

    nomes.push(inputNome.value);
    DDDs.push(inputDDD.value);
    telefones.push(inputPhone.value);
    tipos.push(tipo);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>(${inputDDD.value}) ${inputPhone.value}</td>`;
    linha += `<td>${tipo === 'Celular' ? emojiCelular : emojiResidencial}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputDDD.value = '';
    inputPhone.value = '';
    document.getElementById('cell').checked = false;
    document.getElementById('residencial').checked = false;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaQuantidadeContatos() {
    const qtdTotalCont = document.querySelector('.qtd-total-cont');
    qtdTotalCont.textContent = nomes.length;
}

function uncheckOther(otherId) {
    document.getElementById(otherId).checked = false;
}