//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}


var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto

//Função de Incluir e Salvar os Dados
function incluirDados() {



    //Incluir um Novo Cadastro
    let strNome = document.getElementById('campoNome').value;
    let strResposta = document.getElementById('campoResposta').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strSenha = document.getElementById('campoSenha').value;
    let idGeradoParaUsuario = generateId(20);
    let novoCadastro = {
        id: idGeradoParaUsuario,
        Nome: strNome,
        Resposta: strResposta,
        Email: strEmail,
        Senha: strSenha
    };
    if (strNome == "" || strEmail == "" || strSenha == "") {
        alert("Preencha os Campos!");
    } else {
        //Cria um novo Cadastro no Banco de Dados
        db.usuarios.push(novoCadastro);
        let idParaListadeBoasVindas = generateListId();
        let idGeradoParaItemDeBoasVindas = generateItemId();
        var estruturaDeListaNovoUsuario = {
            id: idGeradoParaUsuario,
            listas: [{
                lista_id: idParaListadeBoasVindas,
                lista_nome: 'Bem vindo ao listfy',
                lista_cor: '#FF006E',
                lista_itens: [{
                    item_id: idGeradoParaItemDeBoasVindas,
                    titulo: 'Sobre o listfy',
                    descricao: 'Listfy te ajuda a organizar os estudos da melhor maneira possivel, e com o mínimo de bugs 😉',
                    data: '42/42/4242',
                    is_checked: false,
                }]
            }]
        }

        db.listasUsuarios.push(estruturaDeListaNovoUsuario);
        //Salvar os Dados no localStorage 
        salvaDados(db);
        //Console dos cadastros depois de ter criado algum novoCadastro
        console.log(db);
        alert("Cadastro Efetuado com Sucesso");
        console.log("Redirecionano.......");
        window.location.href = "../login/login.html";
    }

}

//Função de Login
function loginDados() {

    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto

    //Pega os valores das variáveis Email e Senha
    var Email = document.querySelector("input#Email").value;
    var Senha = document.querySelector("input#Senha").value;

    //Ler os dados do Banco de Dados(db)
    for (let i = 0; i < db.usuarios.length; i++) {
        var usuario = db.usuarios[i];

        //Consoles caso queira testar
        /*console.log(usuarios);
        console.log(Email);
        console.log(Senha);
        console.log(usuario.Email);
        console.log(usuario.Senha);
        console.log(typeof (Email));
        console.log(typeof (Senha));
        console.log(typeof (usuario.Email));
        console.log(typeof (usuario.Senha));*/

        //Verifica se o Usuário é Valido 

        if (Email == usuario.Email && Senha == usuario.Senha) {
            //Aqui vai entrar na página do Aplicativo,mas por enquanto esta como só um alerta mesmo
            localStorage.setItem("acesso", true);

            window.alert("Login Efetuado com Sucesso");
            console.log("Redirecionano......."); //log de redirecionamento
            window.location.href = "../home/home.html"; // redicionamento de usuário

            db.usuarioLogadoAtualmente = usuario.id; //setando o id de sessão
            console.log("Id de Login: " + db.usuarioLogadoAtualmente); //mais logs com informação
            salvaDados(db)
            console.log(usuario);
        }

    }
}