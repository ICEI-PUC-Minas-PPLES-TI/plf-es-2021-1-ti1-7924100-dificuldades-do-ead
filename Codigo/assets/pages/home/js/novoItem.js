

/**
 * Essa função é responsável por injetar o 
 * HTML necessário para a exibição da tela de criação de item no modal
 * subtituindo a lista de itens vista anteriormente
 */
function renderizarTelaNovoItem() {
    let db = JSON.parse(localStorage.getItem('db'));
    let indexDoConjuntoDeListas = localStorage.getItem('indexDaListaDoUsuario');
    var lista_id = localStorage.getItem('itensRequeridosId')

    let indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);

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
            <button class="cancelar-novo-item" onclick="cancelarItem()"><i class='bx bx-x-circle'></i></button>
            <button class="criar-novo-item" onclick="criarItem()"><i class='bx bx-plus-circle'></i></button>
        </div>
    </div>`

    var modal = document.querySelector('div.modal-itens');
    modal.innerHTML = preRenderModalContent;

    var modalHeader = document.querySelector('div.modal-itens-header');
    preRenderModalHeader = preRenderModalHeader.join("");
    modalHeader.innerHTML = preRenderModalHeader.toString();

    var novoItem = document.querySelector('div.modal-itens-body')
    novoItem.innerHTML = preRenderNovoItem;
}


/**
 * Quando confirmada a criaçao do item com o pressionar de um botão
 * essa função é chamada. Ela cria a estrutura da dados do item a ser slavo e 
 * verifica se há inconsistências como a falta de titulo o data em um item. Caso haja, 
 * um alert é exibido na tela.
 */
function criarItem() {
    var db = JSON.parse(localStorage.getItem('db'));
    let lista_id = Number(localStorage.getItem('itensRequeridosId'));
    let indexDoConjuntoDeListas = Number(localStorage.getItem('indexDaListaDoUsuario'));
    let indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);

    let idNovoItem = generateItemId();
    var dadosNovoItem = {
        item_id: idNovoItem,
        titulo: document.querySelector('input.titulo-novo-item').value.toString(),
        descricao: document.querySelector('textarea.descricao-novo-item').value.toString(),
        data: document.querySelector('input.data-novo-item').value.toString().substr(0, 10).split('-').reverse().join('/'),
        is_checked: false,
    }
    if(dadosNovoItem.titulo == ""){
        alert('Dê um nome para a sua nova tarefa 😶');
    }else if(dadosNovoItem.data == ""){
        alert('Defina uma data para sua tarefa 🗓️')
    }else{
        db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens.push(dadosNovoItem);
        localStorage.setItem('db', JSON.stringify(db));
        console.log('Item criado com sucesso');
        console.log(db);
        carregarItens();
    }

}

/**
 * Essa função renderiza de volta a tela para visualização de itens da lista
 * Ela é chamada quando o botão de cancelar a criação é clicado; 
 */
function cancelarItem() {
    console.log('Botão de cancelar apertado');
    carregarItens();
}