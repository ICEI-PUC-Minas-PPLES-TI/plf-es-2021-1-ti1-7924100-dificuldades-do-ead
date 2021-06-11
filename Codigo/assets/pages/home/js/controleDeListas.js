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

        var metadadosDasListas = {
            listasLen: listasDoUsuario.length - 1,
            ultimoIdLista: listasDoUsuario[listasDoUsuario.length - 1].lista_id
        }
        console.log(metadadosDasListas)
        var listas = document.querySelector('div.main-content-lists');
        console.log(dadosNovaLista.nomeLista)
        if (dadosNovaLista.nomeLista == null || dadosNovaLista.nomeLista == '') {
            dadosNovaLista.nomeLista = 'Lista sem nome';
        }
        //Objeto para armazenamento da lista
        var lista = {
            lista_id: metadadosDasListas.ultimoIdLista + 1,
            lista_nome: dadosNovaLista.nomeLista,
            lista_cor: dadosNovaLista.cor,
            lista_itens: []
        }


        //Armazenamento da nova lista no storage
        db.listasUsuarios[indexListas].listas.push(lista)
        localStorage.setItem('db', JSON.stringify(db));

        listas.innerHTML += `
        <div class="list" style="background-color:${lista.lista_cor} !important;">
            <div class="hidded-options" id="lista-${lista.lista_id}">
                <div class="list-trash">
                    <i class='bx bxs-trash'></i>
                </div>
                <div class="list-edit">
                    <i class='bx bxs-pencil'></i>
                </div>
            </div>
            <h2 class="listTitle">${lista.lista_nome}</h2>
            <i onclick="mostrarMenu(${lista.lista_id})" class='bx bx-dots-vertical-rounded menuList'></i>
        </div>
    `;
        console.log("Lista adicionanda ao storage");
        console.log('Resumo das alterações');
        console.log(db)
        closeModal();
    } else {
        console.log('Criação de lista CANCELADA');
        closeModal();
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
function openModal() {
    let modal = document.querySelector('div.modal');
    let overlay = document.querySelector('div#overlay')
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal() {
    let modal = document.querySelector('div.modal');
    let overlay = document.querySelector('div#overlay')
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
