function novaLista(control) {
    /*
    dadosNovaLista = {
        canceled: 1,
        nomeLista: 'nome',
        cor: 'cor'
    }
    */
    var dadosNovaLista;
    if (control) {
        dadosNovaLista = {
            ok: true,
            nomeLista: '',
            cor: ''
        }
        dadosNovaLista.nomeLista = document.querySelector('input.nome-da-lista').value;
        var corRadio = document.querySelectorAll('input.color-selector');
        for (let i = 0, length = corRadio.length; i < length; i++) {
            if (corRadio[i].checked) {
                // encontra a cor slecionada
                dadosNovaLista.cor = corRadio[i].value

                // Para o loop ao encontrar a cor selecionada
                break;
            }
        }
        dadosNovaLista;

        var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
        var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto
        console.log(db)

        var indexListas = Number(localStorage.getItem('indexDaListaDoUsuario'));
        console.log(indexListas);

        var listasDoUsuario = db.listasUsuarios[indexListas].listas;
        console.log(listasDoUsuario)
        var metadadosDasListas;
        console.log(metadadosDasListas)
        var listas = document.querySelector('div.main-content-lists');
        console.log(dadosNovaLista.nomeLista)
        if (dadosNovaLista.nomeLista == null || dadosNovaLista.nomeLista == '') {
            dadosNovaLista.nomeLista = 'Lista sem nome';
        }
        let idDelistaGerado = generateListId();
        //Objeto para armazenamento da lista
        var lista = {
            lista_id: idDelistaGerado,
            lista_nome: dadosNovaLista.nomeLista,
            lista_cor: dadosNovaLista.cor,
            lista_itens: []
        }


        //Armazenamento da nova lista no storage
        db.listasUsuarios[indexListas].listas.push(lista)
        localStorage.setItem('db', JSON.stringify(db));

        listas.innerHTML += `
        <div class="list" id="my-list-id${lista.lista_id}" style="background-color:${lista.lista_cor} !important;">
            <div class="hidded-options" id="lista-${lista.lista_id}">
                <div class="list-trash" onclick="abrirModalDeletarLista(${lista.lista_id})">
                    <i class='bx bxs-trash'></i>
                </div>
                <div class="list-edit" onclick="abrirModalEditarLista(${lista.lista_id})">
                    <i class='bx bxs-pencil'></i>
                </div>
            </div>
            <h2 class="listTitle" onclick="abrirModalItens(${lista.lista_id})">${lista.lista_nome}</h2>
            <i onclick="mostrarMenu(${lista.lista_id})" class='bx bx-dots-vertical-rounded menuList'></i>
        </div>
    `;
        console.log("Lista adicionanda ao storage");
        console.log('Resumo das alterações');
        console.log(db)
        limparInputDeTexto(); //limpeza do input com o titulo da lista
        fecharModalNovaLista();
    } else {
        console.log('Criação de lista CANCELADA');
        limparInputDeTexto(); //limpeza do input com o titulo da lista
        fecharModalNovaLista();
    }
    /*
        A função a seguir limpa o input de texto da no modal para criação
        de listas, independente se ela for criada ou não
    */
    function limparInputDeTexto() {
        let input = document.querySelector('input.nome-da-lista');
        input.value = '';
    }
}


function deleteLista(confirm) {
    if (confirm) {

        //Essas duas linhas de código buscam no local storage qual lista deve ser apagada
        let preDelete = localStorage.getItem('deleteId');
        let lista_id = JSON.parse(preDelete);


        /*==============================================================
        Recuperando o local Storage inteiro para manipulação
        ================================================================*/
        var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
        var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto
        //console.log(db)
        /*==============================================================*/

        /*
            A 3 variáveis declaradas logo abaixo 
            servem para localizar o conjunto de listas pertencentes
            o usuário logado
        */
        var indexListas = Number(localStorage.getItem('indexDaListaDoUsuario'));
        //console.log(indexListas);
        var listasDoUsuario = db.listasUsuarios[indexListas].listas;
        //console.log(listasDoUsuario)
        var metadadosDasListas = {
            listasLen: listasDoUsuario.length - 1,
        }

        //console.log(metadadosDasListas)


        /*
            O For que vem logo abaixo deste comentário busca a lista no banco e apaga
            ela com a função slice() de arrays, em seguida os dados modificados são gravados
        */
        for (let i = 0; i < listasDoUsuario.length; i++) {
            if (listasDoUsuario[i].lista_id == lista_id) {
                db.listasUsuarios[indexListas].listas.splice(i, 1)
                localStorage.setItem('db', JSON.stringify(db));
                console.log('Elemento apagado do localStorage com sucesso');
            }
        }
        //===================================================================
        document.querySelector(`div#my-list-id${lista_id}`).remove()
        fecharModalDeletarLista();
    } else {
        //Se a operação de exclusão for cancelada o modal simplismente é fechado
        fecharModalDeletarLista();
    }
}

function editarLista(confirm) {
    if (confirm) {

        //Essas duas linhas de código buscam no local storage qual lista deve ser apagada
        let preEdit = localStorage.getItem('editId');
        let lista_id = JSON.parse(preEdit);


        /*==============================================================
        Recuperando o local Storage inteiro para manipulação
        ================================================================*/
        var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
        var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto
        //console.log(db)
        /*==============================================================*/

        /*
        A 3 variáveis declaradas logo abaixo 
        servem para localizar o conjunto de listas pertencentes
        o usuário logado
        */
        var indexListas = Number(localStorage.getItem('indexDaListaDoUsuario'));
        //console.log(indexListas);
        var listasDoUsuario = db.listasUsuarios[indexListas].listas;
        //console.log(listasDoUsuario)
        var metadadosDasListas = {
            listasLen: listasDoUsuario.length - 1,
        }
        var novaCor;
        var corRadio = document.querySelectorAll('input.color-editor-selector');
        for (let i = 0, length = corRadio.length; i < length; i++) {
            if (corRadio[i].checked) {
                // encontra a cor slecionada
                novaCor = corRadio[i].value

                // Para o loop ao encontrar a cor selecionada
                break;
            }
        }
        var novoNome = document.querySelector('input.novo-nome-da-lista').value
        for (let i = 0; i < listasDoUsuario.length; i++) {
            if (listasDoUsuario[i].lista_id == lista_id) {
                db.listasUsuarios[indexListas].listas[i].lista_nome = novoNome;
                db.listasUsuarios[indexListas].listas[i].lista_cor = novaCor;
                let listaNaPagina = document.querySelector(`div#my-list-id${lista_id}`);
                let listaTitulo = listaNaPagina.querySelector('h2.listTitle');
                listaTitulo.innerText = db.listasUsuarios[indexListas].listas[i].lista_nome;
                listaNaPagina.style.backgroundColor = db.listasUsuarios[indexListas].listas[i].lista_cor;
                localStorage.setItem('db', JSON.stringify(db));
                console.log('Elemento apagado do localStorage com sucesso');
            }
        }
        fecharModalEditarLista()
    }else{
        fecharModalEditarLista() 
    }
}






/*
    Esconder e mostrar opções de listas ao clicar nos 3 pontinhos
*/

/*
    Ao ser chamada a seguinte função troca as classes de todos os menus da pagina para
    um que possui o display none;
    Assim não precisa desativar um menu em específico
*/
function esconderTodosOsMenusDeLista() {
    var menus = document.querySelectorAll('div.list-options');
    for (let i = 0; i < menus.length; i++) {
        menus[i].classList.remove('list-options');
        menus[i].classList.add('hidded-options');
    }
}

/*Essa função apresenta o menu na div ou lista que fez a chamada.
    durante a chamada ocorre uma passagem de parâmetro que é o id da lista em especifico 
    da qual o menu será mostrado
*/
function mostrarMenu(listaId) {
    esconderTodosOsMenusDeLista();
    var menu = document.querySelector(`div#lista-${listaId}`);
    menu.classList.remove('hidded-options');
    menu.classList.add('list-options');
}


/*
    =======================================
    FUNÇÕES RELACIONADAS AOS MODAIS
    =======================================
*/
function abrirModalNovaLista() {
    let modal = document.querySelector('div.modal');
    let overlay = document.querySelector('div#overlay')
    modal.classList.add('active')
    overlay.classList.add('active')
}

function fecharModalNovaLista() {
    let modal = document.querySelector('div.modal');
    let overlay = document.querySelector('div#overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function abrirModalDeletarLista(deleteId) {
    let modal = document.querySelector('div.modal-delete');
    let overlay = document.querySelector('div#overlay')
    modal.classList.add('active')
    overlay.classList.add('active')
    /*
        Selecionando lista a ser deletada, e gravando dados no local
        Storage
    */
    localStorage.setItem('deleteId', JSON.stringify(deleteId));
}

function fecharModalDeletarLista() {
    let modal = document.querySelector('div.modal-delete');
    let overlay = document.querySelector('div#overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
    localStorage.removeItem('deleteId')
}

function abrirModalEditarLista(editId) {
    let modal = document.querySelector('div.modal-editor');
    let overlay = document.querySelector('div#overlay')
    modal.classList.add('active')
    overlay.classList.add('active')
    /*
        Selecionando lista a ser deletada, e gravando dados no local
        Storage
    */
    localStorage.setItem('editId', JSON.stringify(editId));
}

function fecharModalEditarLista() {
    let modal = document.querySelector('div.modal-editor');
    let overlay = document.querySelector('div#overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
    localStorage.removeItem('editId')
}