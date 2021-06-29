/**
 * Funções para abertura e fechamento do 
 * modal de exportação de dados
 */
/*========================================================================*/
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
/*========================================================================*/


/**
 *Essa função exporta os dados
 *ao ser pressionado o botão de confirmação.
 *Ela detecta o formato a partir dos input de
 *tipo radio checkados no HTML.
 */
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
        case 'MD':
            exportarMD();
            break;
        default:
            console.log('ERRO de exportação');
            break;
    }
};

/**
 *FUNÇÃO QUE EXPORTA EM JSON
 *
 */
function exportarJSON() {
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

/**
 *FUNÇÃO QUE EXPORTA EM TXT
 *
 */
function exportarTXT() {
    console.log('Exportando em TXT...');
    let dadosUsuario = localizarUsuario();
    let db = JSON.parse(localStorage.getItem('db'));
    let conteudoCabecalho = `${db.usuarios[dadosUsuario.indexDoUsuario].Nome}\n==========LISTAS==========\n`;
    let conteudo = [conteudoCabecalho];
    let listasDoUsuario = db.listasUsuarios[dadosUsuario.indexDoConjuntoDeListas].listas
    for (let i = 0; i < listasDoUsuario.length; i++) {
        let estruturaLista = `\nTitulo da Lista: ${listasDoUsuario[i].lista_nome}\nCor da lista: ${listasDoUsuario[i].lista_cor}\nItens da lista:\n`
        let listaItens = [];
        for (let j = 0; j < listasDoUsuario[i].lista_itens.length; j++) {
            if (listasDoUsuario[i].lista_itens[j].is_checked) {
                let listaEstruturaItem = `\nTarefa: [*] ${listasDoUsuario[i].lista_itens[j].titulo}\ndescricao: ${listasDoUsuario[i].lista_itens[j].descricao}\ndata: ${listasDoUsuario[i].lista_itens[j].data}`
                listaItens.push(listaEstruturaItem);
            } else {
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

/**
 *FUNÇÃO PARA EXPORTAÇÃO DE PDF
 *
 */
function exportarPDF() {
    console.log('Exportando em PDF...');
    let dadosUsuario = localizarUsuario();
    let db = JSON.parse(localStorage.getItem('db'));
    let conteudoCabecalho = `${db.usuarios[dadosUsuario.indexDoUsuario].Nome}\n==========LISTAS==========\n`;
    let conteudo = [conteudoCabecalho];
    let listasDoUsuario = db.listasUsuarios[dadosUsuario.indexDoConjuntoDeListas].listas
    for (let i = 0; i < listasDoUsuario.length; i++) {
        let estruturaLista = `\nTitulo da Lista: ${listasDoUsuario[i].lista_nome}\nCor da lista: ${listasDoUsuario[i].lista_cor}\nItens da lista:\n`
        let listaItens = [];
        for (let j = 0; j < listasDoUsuario[i].lista_itens.length; j++) {
            if (listasDoUsuario[i].lista_itens[j].is_checked) {
                let listaEstruturaItem = `\nTarefa: [*] ${listasDoUsuario[i].lista_itens[j].titulo}\ndescricao: ${listasDoUsuario[i].lista_itens[j].descricao}\ndata: ${listasDoUsuario[i].lista_itens[j].data}\n`
                listaItens.push(listaEstruturaItem);
            } else {
                let listaEstruturaItem = `\nTarefa: [ ] ${listasDoUsuario[i].lista_itens[j].titulo}\ndescricao: ${listasDoUsuario[i].lista_itens[j].descricao}\ndata: ${listasDoUsuario[i].lista_itens[j].data}\n`
                listaItens.push(listaEstruturaItem);
            }
        }
        listaItens.join(" ")
        let preConteudo = `${estruturaLista}\n${listaItens}\n-------------------\n`;
        conteudo.push(preConteudo);
    }

    conteudo.join(' ');
    conteudo = conteudo.toString();
    const doc = new jsPDF();
    lines = doc.splitTextToSize(conteudo, 150)
    doc.text(10, 10, lines)
    doc.save("dados.pdf");

}

/**
 *fUNÇÃO PRINCIPAL DE EXPORTAÇÃO EM XML
 *
 */
function exportarXML() {
    console.log('Exportando em XML...');
    let dadosUsuario = localizarUsuario();
    let db = JSON.parse(localStorage.getItem('db'));
    let conteudo = {
        nome: db.usuarios[dadosUsuario.indexDoUsuario].Nome,
        listas: db.listasUsuarios[dadosUsuario.indexDoConjuntoDeListas].listas,
    }
    let conteudoXML = converterParaXML(conteudo)
    downloadDados("dados.xml", conteudoXML);
}

/**
 *FUNÇÃO QUE EXPORTA OS DADOS EM MARKDOWN
 *
 */
function exportarMD() {
    console.log('Exportando em MD...');
    let dadosUsuario = localizarUsuario();
    let db = JSON.parse(localStorage.getItem('db'));
    let conteudoCabecalho = `# ${db.usuarios[dadosUsuario.indexDoUsuario].Nome}\n## ==========LISTAS==========\n`;
    let conteudo = [conteudoCabecalho];
    let listasDoUsuario = db.listasUsuarios[dadosUsuario.indexDoConjuntoDeListas].listas
    for (let i = 0; i < listasDoUsuario.length; i++) {
        let estruturaLista = `\n### Titulo da Lista: ${listasDoUsuario[i].lista_nome}\nCor da lista: ${listasDoUsuario[i].lista_cor}\nItens da lista:\n`
        let listaItens = [];
        for (let j = 0; j < listasDoUsuario[i].lista_itens.length; j++) {
            if (listasDoUsuario[i].lista_itens[j].is_checked) {
                let listaEstruturaItem = `\n\n**Tarefa:** - [ ] ${listasDoUsuario[i].lista_itens[j].titulo}\n\n**descricao:** ${listasDoUsuario[i].lista_itens[j].descricao}\n\n**data:** ${listasDoUsuario[i].lista_itens[j].data}\n\n`
                listaItens.push(listaEstruturaItem);
            } else {
                let listaEstruturaItem = `\n\n**Tarefa:** [ ] ${listasDoUsuario[i].lista_itens[j].titulo}\n\n**descricao:** ${listasDoUsuario[i].lista_itens[j].descricao}\n\n**data:** ${listasDoUsuario[i].lista_itens[j].data}\n\n`
                listaItens.push(listaEstruturaItem);
            }
        }
        listaItens.join(",")
        let preConteudo = `${estruturaLista}\n${listaItens}\n-------------------\n`;
        conteudo.push(preConteudo);
    }
    downloadDados("dados.md", conteudo)
}

/**
 *Essa função é utilizada uma vez para cada exportação.
 *Ela é responsavel por fazer o download do arquivo utilizando uma biblioteca chamada 
 *FILESAVER.js
 *
 * @param {string} nomeArquivo - Uma string com nome e extensão do arquivo a ser baixado
 * @param {string} conteudo - O conteudo do arquivo. ( trate de tratar e frmatar a strinda da maneira correta para grava-la no arquivo)
 */
function downloadDados(nomeArquivo, conteudo) {
    var blob = new Blob([conteudo], {
        type: "sh/plain;charset=utf-8"
    });
    console.log(conteudo)
    saveAs(blob, nomeArquivo);
}

/**
 *Essa função recebe um objeto javascript e o transforma em XML
 *e retorna esse XML como string
 *
 * @param {objeto} obj - Objeto javascript a ser transformado em XML ( é objeto mesmo, não precisa de stringify)
 * @return {string} - string que contem os dados em forma e marcação de XML
 */
function converterParaXML(obj) {
    var xml = '';
    for (var prop in obj) {
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
                xml += "<" + prop + ">";
                xml += converterParaXML(new Object(obj[prop][array]));
                xml += "</" + prop + ">";
            }
        } else if (typeof obj[prop] == "object") {
            xml += converterParaXML(new Object(obj[prop]));
        } else {
            xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    xml = `<dados>${xml}</dados>`;
    return xml;
}

/**
 *Essa função é umtilitário para a busca de alguns dados obre o usuário
 *como o index de suas informações no array de usuários, seu id e o
 *index do seu conjunto de listas no array de listasUsuários do localstorage
 *
 * @return {objeto} - um objeto que contem o id, index do usuário e o index do seu conjunto de listas.
 */
function localizarUsuario() {
    let db = JSON.parse(localStorage.getItem('db'))
    let usuario_id = db.usuarioLogadoAtualmente;
    var dadosUsuario = {
        id: 1,
        indexDoUsuario: 0,
        indexDoConjuntoDeListas: 0,
    }
    for (let i = 0; i < db.listasUsuarios.length; i++) {
        if (db.listasUsuarios[i].id == usuario_id) {
            dadosUsuario.id = usuario_id;
            dadosUsuario.indexDoConjuntoDeListas = i;
            break;
        }
    }
    for (let j = 0; j < db.usuarios.length; j++) {
        if (db.usuarios[j].id == usuario_id) {
            dadosUsuario.indexDoUsuario = j;
        }
    }
    return dadosUsuario;
}