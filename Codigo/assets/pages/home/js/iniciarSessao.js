
//Armazenamento do elemento que recebe as listas
var listas = document.querySelector("div.main-content-lists");
const emojis = ['😃','😎','😉','🌚'];

/*
    Essa função busca e apresenta na tela as listas do usuário
    que acabou de fazer login
*/
function renderizarConteudo(){
    console.log('Carregando a pagina')
    var dadosDasListas; // variavel que armazena somente a lista de listas
    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto
    let indexUsario;
    console.log("Iniciando sessão");
    for(let h = 0 ; h < db.usuarios.length ; h++){
        if(db.usuarios[h].id == db.usuarioLogadoAtualmente){
            indexUsario = h;
            break;
        }
    }
    let indexEmoji = Math.floor(Math.random() * ((emojis.length - 1) - 0 + 1) + 0);
    document.querySelector('h2.userNameTitle').innerHTML = `Olá ${db.usuarios[indexUsario].Nome} ${emojis[indexEmoji]}`
    arrayDasListas = db.listasUsuarios // Array de listas
    //busca pelas listas no array
    for(let i = 0 ; i < arrayDasListas.length ; i++){
        let numero = arrayDasListas[i].id;
        let userNumero = db.usuarioLogadoAtualmente;
        console.log('Id: ' + numero +'\n'+'UserNumero: '+userNumero);
        if(numero == userNumero){
            //listas encontradas
            dadosDasListas = arrayDasListas[i]
            localStorage.setItem('indexDaListaDoUsuario', i)
        }else{
            console.log('Procurando...')
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
            <div class="list" id="my-list-id${dadosDasListas.listas[j].lista_id}" style="background-color:${cor} !important;">
                <div class="hidded-options" id="lista-${dadosDasListas.listas[j].lista_id}">
                    <div class="list-trash" onclick="abrirModalDeletarLista(${dadosDasListas.listas[j].lista_id})">
                        <i class='bx bxs-trash'></i>
                    </div>
                    <div class="list-edit" onclick="abrirModalEditarLista(${dadosDasListas.listas[j].lista_id})">
                        <i class='bx bxs-pencil'></i>
                    </div>
                </div>
                <h2 class="listTitle" onclick="abrirModalItens(${dadosDasListas.listas[j].lista_id})">${dadosDasListas.listas[j].lista_nome}</h2>
                <i onclick="mostrarMenu(${dadosDasListas.listas[j].lista_id})" class='bx bx-dots-vertical-rounded menuList'></i>
            </div>
            `);
    }
   
    //Esse trecho remove as virgulas do array antes ser transformados em string
    preRenderListas = preRenderListas.join("");
    // Todas as listas são inseridas no documento
    listas.innerHTML += preRenderListas.toString();
    //salva dados no local storage
    localStorage.setItem('db', JSON.stringify(db))
}