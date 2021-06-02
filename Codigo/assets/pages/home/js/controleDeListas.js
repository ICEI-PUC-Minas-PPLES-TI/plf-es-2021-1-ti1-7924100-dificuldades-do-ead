

var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto
var corPadrao = '#8338EC'
function novaLista(){

    var listas = document.querySelector('div.main-content-lists');
    listas.removeChild(listas.lastChild)
    var nomeNovaLista = window.prompt("Digite um nome para a nova lista: ");

    listas.innerHTML += `
        <div class="list" style="background-color:${corPadrao} !important;">
            <h2 class="listTitle">${nomeNovaLista}</h2>
            <i class='bx bx-dots-vertical-rounded menuList'></i>
        </div>
    `;
    /*listas.innerHTML += `
        <div class="add-list-button" onclick="novaLista()">
            <i class='bx bx-plus-circle'></i>
        </div>
    `*/

}