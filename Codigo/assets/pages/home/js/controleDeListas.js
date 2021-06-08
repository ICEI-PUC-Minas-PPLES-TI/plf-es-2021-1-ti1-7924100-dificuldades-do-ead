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

var corNovaLista = '#8338EC'

function novaLista() {

    var listas = document.querySelector('div.main-content-lists');


    var nomeNovaLista = window.prompt("Digite um nome para a nova lista: ").toString();

    console.log(nomeNovaLista)
    if (nomeNovaLista == null || nomeNovaLista == '') {
        nomeNovaLista = 'Lista sem nome';
    }
    //Objeto para armazenamento da lista

    var lista = {
            lista_id: metadadosDasListas.ultimoIdLista + 1,
            lista_nome: nomeNovaLista,
            lista_cor: corNovaLista,
            lista_itens: []
        }
        //Armazenamento da nova lista no storage
    db.listasUsuarios[indexListas].listas.push(lista)
    localStorage.setItem('db', JSON.stringify(db));

    listas.innerHTML += `
        <div class="list" style="background-color:${corNovaLista} !important;">
            <h2 class="listTitle">${nomeNovaLista}</h2>
            <i class='bx bx-dots-vertical-rounded menuList'></i>
        </div>
    `;
    console.log("Lista adicionanda ao storage");
    console.log('Resumo das alterações');
    console.log(db)
}