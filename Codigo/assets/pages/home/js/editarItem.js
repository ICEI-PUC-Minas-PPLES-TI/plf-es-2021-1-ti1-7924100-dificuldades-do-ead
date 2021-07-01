/**
 *Quando chamada, essa função desenha atela com os capompos
 * e inputs de dados assim como a função de Criação de novo item.
 * Porém com algumas pequenas diferenças como o preenchimento dos campos.
 *
 * @param {inteiro} item_id - identificador do item a ser modificado
 */
function editarItem(item_id) {
    let db = JSON.parse(localStorage.getItem('db'));
    let indexDoConjuntoDeListas = localStorage.getItem('indexDaListaDoUsuario');
    var lista_id = localStorage.getItem('itensRequeridosId')
    let indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);
    let indexItem = qualOIndexDoItem(item_id, indexLista, indexDoConjuntoDeListas)

    var preRenderModalHeader = []
    var preRenderModalContent = `
        <div class="modal-itens-header">
        </div>
        <div class="modal-itens-body">
        </div>`;

    preRenderModalHeader.push(`
    <h2>${db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_nome} - Nova Tarefa</h2>
    <div class="modal-itens-icones">
    <i class='bx bx-arrow-back' onclick="carregarItens()"></i>
      <i class='bx bx-x' onclick="fecharModalItens()"></i>
    </div>
        `);
    let preRenderNovoItem = `
    <div class="container-novo-item">
        <div class="container-titulo-data">
            <input type="text" class="titulo-novo-item" placeholder="Titulo da tarefa">
            <input type="date" class="data-novo-item">
        </div>
        <div class="container-textarea">
            <textarea name="" id="" cols="30" rows="4" class="descricao-novo-item"></textarea>
        </div>
        <div class="botoes-novo-item">
            <button class="cancelar-novo-item" onclick="cancelarEdicao()"><i class='bx bx-x-circle'></i>Cancelar</button>
            <button class="criar-novo-item" onclick="salvarEdicao(${item_id})"><i class='bx bx-plus-circle'></i>Salvar</button>
        </div>
    </div>`

    var modal = document.querySelector('div.modal-itens');
    modal.innerHTML = preRenderModalContent;

    var modalHeader = document.querySelector('div.modal-itens-header');
    preRenderModalHeader = preRenderModalHeader.join("");
    modalHeader.innerHTML = preRenderModalHeader.toString();

    var novoItem = document.querySelector('div.modal-itens-body')
    novoItem.innerHTML = preRenderNovoItem;


    document.querySelector('input.titulo-novo-item').value = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].titulo
    document.querySelector('input.data-novo-item').value = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].data.toString().substr(0, 10).split('/').reverse().join('-')
    document.querySelector('textarea.descricao-novo-item').value = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].descricao

}

/**
 *Essa função é chamada quando a operação de edição do item é concluida
 * elas subtitui todos os dados do item pelos novos dados inseridos.
 *
 * @param {inteiro} item_id - Identificador do item a ter seus dados alterados.
 */
function salvarEdicao(item_id) {
    var db = JSON.parse(localStorage.getItem('db'));
    let lista_id = Number(localStorage.getItem('itensRequeridosId'));
    let indexDoConjuntoDeListas = Number(localStorage.getItem('indexDaListaDoUsuario'));
    let indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);
    let indexItem = qualOIndexDoItem(item_id, indexLista, indexDoConjuntoDeListas)

    let novosDados = {
        titulo: document.querySelector('input.titulo-novo-item').value.toString(),
        data: document.querySelector('input.data-novo-item').value.toString().substr(0, 10).split('-').reverse().join('/'),
        descricao: document.querySelector('textarea.descricao-novo-item').value.toString(),
    }
    if (novosDados.titulo == "") {
        alert('Dê um nome para a sua nova tarefa 😶');
    } else if (novosDados.data == "") {
        alert('Defina uma data para sua tarefa 🗓️')
    } else {
        db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].titulo = novosDados.titulo;
        db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].data = novosDados.data;
        db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].descricao = novosDados.descricao;
        localStorage.setItem('db', JSON.stringify(db));
        console.log('Item criado com sucesso');
        console.log(db);
        carregarItens();
    }

}