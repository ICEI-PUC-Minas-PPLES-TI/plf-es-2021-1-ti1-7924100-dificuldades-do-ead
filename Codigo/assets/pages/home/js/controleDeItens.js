
/*========== FUNÇÔES RESPONSAVEIS POR ABRIR E FECHAR O MODAL DE ITENS ================ */

/*===============Função que abre o modal de itens*/
function abrirModalItens(itensRequeridosId) {
  let modal = document.querySelector('div.modal-itens'); // Selecionando o modal de itens escondido no HTML
  let overlay = document.querySelector('div#overlay'); // Selecionando o overlay que tambem está escondido

  //Atribuindo aos 2 elementos a classe "active"
  modal.classList.add('active');
  overlay.classList.add('active');

  //Salvando o id da lista da qual serão exibidos os itens( Valor passado por parametro)
  localStorage.setItem('itensRequeridosId', JSON.stringify(itensRequeridosId));

  // Chamando a função para preecher o modal Adequadamente
  carregarItens();
}

/*===============Função que fecha o modal de Itens*/
function fecharModalItens() {
  let modal = document.querySelector('div.modal-itens');
  let overlay = document.querySelector('div#overlay')
  modal.classList.remove('active')
  overlay.classList.remove('active')
  localStorage.removeItem('itensRequeridosId');
}
/*=================================================================================== */

/**
* A Função a seguir carrega os itens da lista e seu cabeçalho 
* é gerado um HTML para cada elemento e esse HTML é injetado no 
* modal, com funções e ids
*/

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
      <i class='bx bx-plus-circle' onclick="renderizarTelaNovoItem()"></i>
      <i class='bx bx-x' onclick="fecharModalItens()"></i>
    </div>
        `);
  for (let j = 0; j < listaEspecifica.lista_itens.length; j++) {
    var cor = listaEspecifica.lista_cor;

    preRenderItens.push(`
        <div class="item-do-modal" id="item-do-modal-id${listaEspecifica.lista_itens[j].item_id}">
        <div class="opcoes-de-item">
          <div class="item-pencil" onclick="editarItem(${listaEspecifica.lista_itens[j].item_id})">
          <i class='bx bxs-pencil'></i>
          </div>
          <div class="item-trash" onclick="excluirItem(${listaEspecifica.lista_itens[j].item_id})">
            <i class='bx bxs-trash'></i>
          </div>
        </div>
        
        <div class="item-dados" style="background-color:${cor};">
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

/**
* Essa função verifica os dados e atributos do localStorage para
* e marca no html inputas que estão checkados de acordo com os dados
* salvos
* @param {inteiro} lista_id - id de uma das listas do usuário
* @param {inteiro} indexDoConjuntoDeListas - posição de todas as listas pertencentes ao usuário no array
*/
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

/**
 *A função a seguir é chamada quando um dos checkboxes tem seu
 *estado alterado pelo usuário no modal enquanto ele ainda 
 *esta aberto
 * @param {inteiro} item_id
 * @param {inteiro} lista_id
 * @param {inteiro} indexDoConjuntoDeListas
 */
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
    } else {
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

/**
 * Essa função remove os itens do local storage e da interface utilizando do ]
 * mesmo principio que o resto da aplicação. A função é chamada quando o elemento
 * é clicado e o id do item em específico é passado como parâmetro para essa função
 * Que fica responsável por recuperar dados e apagar o item na estrutura de dados e
 * no corpo do modal
 *
 * @param {inteiro} item_id
 */
function excluirItem(item_id) {
  var db = JSON.parse(localStorage.getItem('db'));
  let lista_id = Number(localStorage.getItem('itensRequeridosId'));
  let indexDoConjuntoDeListas = Number(localStorage.getItem('indexDaListaDoUsuario'));
  let indexLista = qualOIndexDaLista(lista_id, indexDoConjuntoDeListas);
  indexItem = qualOIndexDoItem(item_id, indexLista, indexDoConjuntoDeListas);
  db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens.splice(indexItem, 1);
  console.log('Item Removido com sucesso da estrutura\nID removido: '+item_id);
  localStorage.setItem('db', JSON.stringify(db));
  console.log('Item excluido foi removido do local storage com sucesso');
  let modalBody = document.querySelector('div.modal-itens-body');
  let itemParaRemover = document.querySelector(`div#item-do-modal-id${item_id}`);
  modalBody.removeChild(itemParaRemover);
  console.log('Item Removido do Modal');
  
  //elem.parentNode.removeChild(elem);
  //array.splice(index, 1);
}

/**
 *Essa função é um utilitário que busca o index de um item no array de itens do
 *objeto listas
 *
 * @param {inteiro} item_id - Id do item que deseja encontrar o index
 * @param {inteiro} indexLista Index da lista na qual o item está
 * @param {inteiro} indexDoConjuntoDeListas - index do conjunto de listas do usuário.
 * @return {inteiro} 
 */
function qualOIndexDoItem(item_id, indexLista, indexDoConjuntoDeListas){
  let db = JSON.parse(localStorage.getItem('db'));
  let indexItem;
  for(let i = 0 ; i < db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens.length ; i++){
    if(db.listasUsuarios[indexDoConjuntoDeListas].listas[indexLista].lista_itens[i].item_id == item_id){
      indexItem = i;
      break;
    }
  }
  return indexItem;
}


/**
 * Essa função é um utilitário que retorna a posição da lista
 * (index) no array de listas do usuário com base no seu id
 *
 * @param {inteiro} lista_id - ID da lista que deseja encontrar
 * @param {inteiro} indexDoConjuntoDeListas - Index do conjunto de listas do usuário no array listasUsuários
 * @return {inteiro} - index da lista procurada
 */
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
