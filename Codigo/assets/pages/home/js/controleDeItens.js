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
              <input type="checkbox" id="item-id${listaEspecifica.lista_itens[j].item_id}" onclick="checkCheckbox(${listaEspecifica.lista_itens[j].item_id}, ${listaEspecifica.lista_id}, ${indexListaDousuario})">
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
  verificarCheckboxes(listaId, indexListaDousuario);
}
function verificarCheckboxes(lista_id, indexDoConjuntoDeListas) {
  var db = JSON.parse(localStorage.getItem('db'));
  let indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);
  for (let i = 0; i < db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens.length; i++) {
    let id_item = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[i].item_id
    console.log('========' + id_item + '======');
    if (db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[i].is_checked == true) {
      document.querySelector(`input#item-id${id_item}`).setAttribute('checked', 'checked');
    }
  }
}
function checkCheckbox(item_id, lista_id, indexDoConjuntoDeListas) {
  console.log('ID do Item Checkado: ' + item_id);
  var db = JSON.parse(localStorage.getItem('db'));
  let indexLista, indexItem;
  indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);
  let listaEspecifica = db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens;

  for (k = 0; k < listaEspecifica.length; k++) {
    if (listaEspecifica[k].item_id == item_id) {
      indexItem = k;
      console.log('O index do item é: ' + indexItem);
    }else{
      console.log('Não é index do item');
    }
  }
  if (listaEspecifica[indexItem].is_checked == true) {
    db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].is_checked = false;
    console.log('Item de id: ' + item_id + '\n[ UNCHECKED ]');
    localStorage.setItem('db', JSON.stringify(db));
    console.log('Dados salvos com [ SUCESSO ]')
  } else {
    db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[indexItem].is_checked = true;
    console.log('Item de id: ' + item_id + '\n[ CHECKED ]');
    localStorage.setItem('db', JSON.stringify(db));
    console.log('Dados salvos com [ SUCESSO ]')
  }

}

function qualOIndexDaLista(lista_id, indexDoConjuntoDeListas) {
  var db = JSON.parse(localStorage.getItem('db'));
  let indexLista
  for (indexLista = 0; indexLista < db.listasUsuarios[indexDoConjuntoDeListas].listas.length; indexLista++) {
    if (db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_id == lista_id) {
      console.log('O index da lista é: ' + indexLista);
      break;
    }
  }
  return indexLista;
}
function pegarListaEspecifica(indexLista, indexDoConjuntoDeListas){
  var db = JSON.parse(localStorage.getItem('db'));
  
  return listaEspecifica;
}