
//Armazenamento do elemento que recebe as listas
var listas = document.querySelector("div.main-content-lists");


var dadosDasListas = {}; // variavel que armazena somente a lista de listas
var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto

/*
    Essa função busca e apresenta na tela as listas do usuário
    que acabou de fazer login
*/
function renderizarConteudo(){

    console.log("Iniciando sessão");
    arrayDasListas = db.listasUsuarios // Array de listas
    
    //busca pelas listas no array
    for(let i = 0 ; i < arrayDasListas.length ; i++){
        let numero = Number(arrayDasListas[i].id);
        let userNumero = localStorage.getItem('usuarioLogadoAtualmente');
        if(numero == userNumero){
            //listas encontradas
            dadosDasListas = arrayDasListas[i]
            localStorage.setItem('indexDaListaDoUsuario', i)
        }else{
            console.log('Nope!')
        }
    }
    var preRenderListas = []

    /*
        O For a seguir acumula em um array todos os elementos HTML
        referentes as listas.
        A cada ciclo ele define a cor e o titulo do elemento na tela juntamente com as
        classes de css para que esses ja vemnham estilizados
    */
    for( let j = 0 ; j < dadosDasListas.listas.length ; j++){
        var cor = dadosDasListas.listas[j].lista_cor;
        
        preRenderListas.push(`
            <div class="list" style="background-color:${cor} !important;">
                <h2 class="listTitle">${dadosDasListas.listas[j].lista_nome}</h2>
                <i class='bx bx-dots-vertical-rounded menuList'></i>
            </div>
            `);
    }
   
    //Esse trecho remove as virgulas do array antes ser transformados em string
    preRenderListas = preRenderListas.join("");

    // Todas as listas são inseridas no documento
    listas.innerHTML = preRenderListas.toString();
    
    //salva dados no local storage
    localStorage.setItem('db', JSON.stringify(db))
}