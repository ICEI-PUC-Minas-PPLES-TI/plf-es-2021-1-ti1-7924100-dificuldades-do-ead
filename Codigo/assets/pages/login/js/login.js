//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
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