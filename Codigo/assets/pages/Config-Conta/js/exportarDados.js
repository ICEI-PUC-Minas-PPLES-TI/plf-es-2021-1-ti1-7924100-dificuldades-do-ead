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
    var dataFormatRadios = document.querySelectorAll('input.data-export-selector');
    let formatoDeExportacao;
    for (let i = 0; i < dataFormatRadios.length; i++) {
        if (dataFormatRadios[i].checked) {
            formatoDeExportacao = dataFormatRadios[i].value;
            break;
        }
    }

    switch (formatoDeExportacao) {
        case 'JSON':
            exportarJSON();
            break;
        case 'TXT':
            exportarTXT();
            break;
        case 'PDF':
            exportarPDF();
            break;
        case 'XML':
            exportarXML();
            break;
        case 'CSV':
            exportarCSV();
            break;
        case 'MD':
            exportarMD();
            break;
        default:
            console.log('ERRO de exportação');
            break;
    }
};
function exportarJSON(){
    console.log('Exportando em JSON...');
    let dadosUsuario = localizarUsuario();
    let db = JSON.parse(localStorage.getItem('db'));
    let conteudo = {
        nome: db.usuarios[dadosUsuario.indexDoUsuario].Nome,
        listas: db.listasUsuarios[dadosUsuario.indexDoConjuntoDeListas].listas,
    }
    let conteudoJSON = JSON.stringify(conteudo);
    downloadDados("Dados.json", conteudoJSON);
}

function exportarTXT(){
    console.log('Exportando...');
    let dadosUsuario = localizarUsuario();
    let db = JSON.parse(localStorage.getItem('db'));
    let conteudoCabecalho = `${db.usuarios[dadosUsuario.indexDoUsuario].Nome}\n==========LISTAS==========\n`;
    let conteudo = [conteudoCabecalho];
    let listasDoUsuario = db.listasUsuarios[dadosUsuario.indexDoConjuntoDeListas].listas
    for(let i = 0 ; i <  listasDoUsuario.length; i++){
        let estruturaLista = `\nTitulo da Lista: ${listasDoUsuario[i].lista_nome}\nCor da lista: ${listasDoUsuario[i].lista_cor}\nItens da lista:\n`
        let listaItens = [];
        for(let j = 0 ; j<listasDoUsuario[i].lista_itens.length ; j++){
            if(listasDoUsuario[i].lista_itens[j].is_checked){
                let listaEstruturaItem = `\nTarefa: [*] ${listasDoUsuario[i].lista_itens[j].titulo}\ndescricao: ${listasDoUsuario[i].lista_itens[j].descricao}\ndata: ${listasDoUsuario[i].lista_itens[j].data}`
                listaItens.push(listaEstruturaItem);
            }else{
                let listaEstruturaItem = `\nTarefa: [ ] ${listasDoUsuario[i].lista_itens[j].titulo}\ndescricao: ${listasDoUsuario[i].lista_itens[j].descricao}\ndata: ${listasDoUsuario[i].lista_itens[j].data}`
                listaItens.push(listaEstruturaItem);
            }
        }
        listaItens.join(" ")
        let preConteudo = `${estruturaLista}\n${listaItens}\n-------------------\n`;
        conteudo.push(preConteudo);
    }
    downloadDados("dados.txt", conteudo)
}
function exportarPDF(){
    console.log('Exportando...');

}
function exportarXML(){
    console.log('Exportando...');

}
function exportarCSV(){
    console.log('Exportando...');

}
function exportarMD(){
    console.log('Exportando...');

}

function downloadDados(nomeArquivo, conteudo){
	var blob = new Blob([conteudo], {
		type: "sh/plain;charset=utf-8"
	});
	console.log(conteudo)
	saveAs(blob, nomeArquivo);
}

function localizarUsuario(){
    let db = JSON.parse(localStorage.getItem('db'))
    let usuario_id = db.usuarioLogadoAtualmente;
    var dadosUsuario = {
        id: 1,
        indexDoUsuario:0,
        indexDoConjuntoDeListas: 0,
    }
    for(let i = 0 ; i < db.listasUsuarios.length ; i++){
        if(db.listasUsuarios[i].id == usuario_id){
            dadosUsuario.id = usuario_id;
            dadosUsuario.indexDoConjuntoDeListas = i;
            break;
        }
    }
    for(let j = 0; j < db.usuarios.length ; j++){
        if(db.usuarios[j].id == usuario_id){
            dadosUsuario.indexDoUsuario = j;
        }
    }
    return dadosUsuario;
}