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
    window.location.href = "../login/login.html";

}

//Função de Login
function loginDados() {

    //Pega os valores das variáveis Email e Senha
    var Email = document.querySelector("input#Email").value;
    var Senha = document.querySelector("input#Senha").value;

    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto

    //Ler os dados do Banco de Dados(db)
    var usuarioEncontrado = false;
    for (let i = 0; i < db.usuarios.length; i++) {
        var usuario = db.usuarios[i];

        //Verifica se o Usuário é Valido 

        if (Email == usuario.Email && Senha == usuario.Senha) {
            //Aqui vai entrar na página do Aplicativo,mas por enquanto esta como só um alerta mesmo
            localStorage.setItem("acesso", true);

            window.alert("Login Efetuado com Sucesso");
            console.log("Redirecionano......."); //log de redirecionamento
            
            db.usuarioLogadoAtualmente = usuario.id; //setando o id de sessão
            console.log("Id de Login: " + db.usuarioLogadoAtualmente); //mais logs com informação
            salvaDados(db)
            console.log(usuario);
            usuarioEncontrado = true
        }
        
        
    }
    if(usuarioEncontrado){
        window.location.href = "../home/home.html"; // redicionamento de usuário
    }else{
        alert("Usuário ou Senha Inválido");
    }
}