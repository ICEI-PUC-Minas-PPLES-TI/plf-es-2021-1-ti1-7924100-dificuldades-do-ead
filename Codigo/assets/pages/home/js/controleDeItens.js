

function carregarItens(){
    let listaId = Number(localStorage.getItem('itensRequeridosId'));
    var db = JSON.parse(localStorage.getItem('db'));
    let indexListaDousuario = Number(localStorage.getItem('indexDaListaDoUsuario'));
    var listasDoUsuario = db.listasUsuarios[indexListaDousuario].listas;
    let listaEspecifica;
    for(let i = 0; i < listasDoUsuario.length ; i++){
        if(listasDoUsuario[i].lista_id == listaId){
            listaEspecifica = listasDoUsuario[i];
            break;
        }
    }
    var preRenderItens = []
    var preRenderModalHeader = []

    for( let j = 0 ; j < listaEspecifica.lista_itens.length ; j++){
        var nome = listaEspecifica.lista_nome;
        var cor = listaEspecifica.lista_cor;

        preRenderModalHeader.push(`
        <h1>${nome}</h1>
        <div class="modal-itens-icones">
          <i class='bx bx-plus-circle'></i>
          <i class='bx bx-x' onclick="fecharModalItens()"></i>
        </div>
            `);

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
    preRenderModalHeader = preRenderModalHeader.join("");
    preRenderItens = preRenderItens.join("");
    var modalheader = document.querySelector('div.modal-itens-header')
    var itens = document.querySelector('div.modal-itens-body')
    // Todas os itens são inseridas no documento
    modalheader.innerHTML = preRenderModalHeader.toString();
    itens.innerHTML = preRenderItens.toString();


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