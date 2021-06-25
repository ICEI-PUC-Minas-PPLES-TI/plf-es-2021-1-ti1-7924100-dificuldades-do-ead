

function carregarItens() {
  let listaId = Number(localStorage.getItem('itensRequeridosId'));
  var db = JSON.parse(localStorage.getItem('db'));
  let indexListaDousuario = Number(localStorage.getItem('indexDaListaDoUsuario'));
  var listasDoUsuario = db.listasUsuarios[indexListaDousuario].listas;
  let listaEspecifica;
  for (let i = 0; i < listasDoUsuario.length; i++) {
    if (listasDoUsuario[i].lista_id == listaId) {
      listaEspecifica = listasDoUsuario[i];
      break;
    }
  }
  var preRenderModalHeader = []
  var preRenderModalContent = `
  <div class="modal-itens-header">
  </div>
  <div class="modal-itens-body">
  </div>`;
  var preRenderItens = []
  var nome = listaEspecifica.lista_nome;

  preRenderModalHeader.push(`
    <h2>${nome}</h2>
    <div class="modal-itens-icones">
      <i class='bx bx-plus-circle'></i>
      <i class='bx bx-x' onclick="fecharModalItens()"></i>
    </div>
        `);
  for (let j = 0; j < listaEspecifica.lista_itens.length; j++) {
    var cor = listaEspecifica.lista_cor;


    preRenderItens.push(`
        <div class="item-do-modal" id="item-do-modal" >
        <div class="item-trash"><i class='bx bxs-trash'></i></div>
        <div class="item-dados" style="background-color:${cor} !important;">
          <div class="item-dados-header">
            <h2 class="">${listaEspecifica.lista_itens[j].titulo}</h2>
            <h3 class=""> <i class='bx bxs-calendar-event'></i>${listaEspecifica.lista_itens[j].data}</h3>
          </div>
          <div class="item-dados-conteudo">
            <div class="item-descricao">
              <p>${listaEspecifica.lista_itens[j].descricao}</p>
            </div>
            <div class="item-check">
              <input  type="checkbox">
            </div>
          </div>
        </div>
      </div>
            `);

  }

  //Esse trecho remove as virgulas do array antes ser transformados em string
  var modal = document.querySelector('div.modal-itens');
  modal.innerHTML = preRenderModalContent;
  var modalHeader = document.querySelector('div.modal-itens-header');
  preRenderModalHeader = preRenderModalHeader.join("");
  modalHeader.innerHTML = preRenderModalHeader.toString();
  preRenderItens = preRenderItens.join("");
  var itens = document.querySelector('div.modal-itens-body')
  itens.innerHTML = preRenderItens.toString();
  // Todas os itens são inseridas no documento


}

function abrirModalItens(itensRequeridosId) {
  let modal = document.querySelector('div.modal-itens');
  let overlay = document.querySelector('div#overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
  localStorage.setItem('itensRequeridosId', JSON.stringify(itensRequeridosId));
  carregarItens();
}
function fecharModalItens() {
  let modal = document.querySelector('div.modal-itens');
  let overlay = document.querySelector('div#overlay')
  modal.classList.remove('active')
  overlay.classList.remove('active')
  localStorage.removeItem('itensRequeridosId');
}