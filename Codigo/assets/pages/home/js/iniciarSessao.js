

var listas = document.querySelector("div.main-content");
var dadosDasListas = {}; 
var preDb = localStorage.getItem('db');
var db = JSON.parse(preDb)
function renderizarConteudo(){
    console.log("Iniciando sessão");
    arrayDasListas = db.listasUsuarios
    
    //busca pelas listas no array
    for(let i = 0 ; i < arrayDasListas.length ; i++){
        let numero = Number(arrayDasListas[i].id);
        let userNumero = localStorage.getItem('usuarioLogadoAtualmente');
        if(numero == userNumero){
            //listas encontradas
            dadosDasListas = arrayDasListas[i]
        }else{
            console.log('Nope!')
        }
    }
    var preRenderListas = []
    for( let j = 0 ; j < dadosDasListas.listas.length ; j++){
        var cor = dadosDasListas.listas[j].lista_cor;
        
        preRenderListas.unshift(`
            <div class="list" style="background-color:${cor} !important;">
                <h2 class="listTitle">${dadosDasListas.listas[j].lista_nome}</h2>
                <i class='bx bx-dots-vertical-rounded menuList'></i>
            </div>
            `);
    }
    preRenderListas.push(`
        <div class="add-list-button">
            <i class='bx bx-plus-circle'></i>
        </div>
    `);
    listas.innerHTML = preRenderListas.toString();
    

}