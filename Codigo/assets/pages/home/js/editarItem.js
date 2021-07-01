function editarItem(item_id){
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
            <button class="cancelar-novo-item" onclick="cancelarEdicao()"><i class='bx bx-x-circle'></i></button>
            <button class="criar-novo-item" onclick="salvarEdicao()"><i class='bx bx-plus-circle'></i></button>
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
    document.querySelector('input.data-novo-item').value = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].data
    document.querySelector('textarea.container-textarea').value = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].descricao

}