//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

//Função de Incluir e Salvar os Dados
function incluirDados() {


    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto

    //Incluir um Novo Cadastro
    let strNome = document.getElementById('campoNome').value;
    let strResposta = document.getElementById('campoResposta').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strSenha = document.getElementById('campoSenha').value;
    db.ultimoId++; // icremento da variavel do banco que regista qual foi o ultimo id cadastrado e usado
    let novoCadastro = {
        id: db.ultimoId,
        Nome: strNome,
        Resposta: strResposta,
        Email: strEmail,
        Senha: strSenha
    };
    //Cria um novo Cadastro no Banco de Dados
    db.usuarios.push(novoCadastro);

    //Salvar os Dados no localStorage 
    salvaDados(db);
    //Console dos cadastros depois de ter criado algum novoCadastro
    console.log(db);
    alert("Cadastro Bem-Sucedido");
    console.log("Redirecionano.......");
    window.location.href = "login/login.html";

}

//Função de Login
function loginDados() {

    //Pega os valores das variáveis Email e Senha
    var Email = document.querySelector("input#Email").value;
    var Senha = document.querySelector("input#Senha").value;

    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto

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
            alert("Entrou");
            localStorage.setItem("acesso", true);

            window.alert("Login Sucedido");
            console.log("Redirecionano......."); //log de redirecionamento
            window.location.href = "assets/pages/home/home.html"; // redicionamento de usuário

            db.usuarioLogadoAtualmente = usuario.id; //setando o id de sessão
            console.log("Id de Login: " + db.usuarioLogadoAtualmente); //mais logs com informação
            salvaDados(db)
            console.log(usuario);
        }

        //Tentando fazer uma função para quando o usuário e senha forem inválidos Emitir um alerta de erro
        /*if (Email != usuario.Email && Senha != usuario.Senha){
            localStorage.setItem("acesso", false);
        }
        
        if(logado != true){
            alert("Você não esta autenticado!");
            window.location.href="cadastro.html";
        }*/
    }
}








/*
//[---------------RECUPERAR SENHA-------------]

function trocarSenha() {


    var Email = document.querySelector("input#Email").value;
    var Resposta = document.querySelector("input#Resposta").value;
    //var Senha = document.querySelector("input#Senha").value;


    for (let i = 0; i < db.usuarios.length; i++) {//ler usuario do banco de dados
        var usuario = db.usuarios[i];

        if (Email == usuario.Email && Resposta == usuario.Resposta) {//identificar se a resposta está correta

            let strSenha = document.getElementById('campoSenha').value;

            db.usuario[i].Senha = strSenha


            window.alert("Senha alterada com sucesso");

            window.location.href = "#";//colocar link para pagina de login

            salvaDados(db)
        }
    }
}

//[------------------------FIM RECUPERAR SENHA-----------]*/