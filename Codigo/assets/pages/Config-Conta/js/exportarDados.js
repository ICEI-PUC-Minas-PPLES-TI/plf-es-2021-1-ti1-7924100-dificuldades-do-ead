function abrirModalExportarDados() {
    let modal = document.querySelector('div.modal-exportar'); // Selecionando o modal de itens escondido no HTML
    let overlay = document.querySelector('div#overlay'); // Selecionando o overlay que tambem está escondido
    //Atribuindo aos 2 elementos a classe "active"
    modal.classList.add('active');
    overlay.classList.add('active');
}

/*===============Função que fecha o modal de Itens*/
function fecharModalExportarDados() {
    let modal = document.querySelector('div.modal-exportar');
    let overlay = document.querySelector('div#overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function exportarDados() {

};
