
function renderizarTelaNovoItem() {
    var db = JSON.parse(localStorage.getItem('db'));
    var preRenderModalHeader = []
    var preRenderModalContent = `
        <div class="modal-itens-header">
        </div>
        <div class="modal-itens-body">
        </div>`;

    preRenderModalHeader.push(`
    <h2>Nome - Nova Tarefa</h2>
    <div class="modal-itens-icones">
      <i class='bx bx-plus-circle' onclick="novoItem()"></i>
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
            <button class="cancelar-novo-item">Cancelar</button>
            <button class="criar-novo-item">criar</button>
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
