//Função de Ler os Dados
/*function lerDados() {
    let strDados = localStorage.getItem('db');

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            Cadastros: [
                { Nome: "André De Oliveira", Email: "andre_1234@yahoo.com.br", Senha: "andre1234" },
                { Nome: "Breno Rosa", Email: "breno_1234@yahoo.com.br", Senha: "breno1234" },
                { Nome: "Gabriel Victor", Email: "gabriel_1234@yahoo.com.br", Senha: "gabriel1234" },
                { Nome: "João Gabriel", Email: "joao_1234@yahoo.com.br", Senha: "joao1234" }
            ]
        }
    }

    return objDados;
}*/

var objDados =
    [
        { Nome: "André De Oliveira", Email: "andre_1234@yahoo.com.br", Senha: "andre1234" },
        { Nome: "Breno Rosa", Email: "breno_1234@yahoo.com.br", Senha: "breno1234" },
        { Nome: "Gabriel Victor", Email: "gabriel_1234@yahoo.com.br", Senha: "gabriel1234" },
        { Nome: "João Gabriel", Email: "joao_1234@yahoo.com.br", Senha: "joao1234" }
    ]

//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

//Função de Incluir e Salvar os Dados
function incluirDados() {
    //Ler os Dados do localStorage
    let objDados = lerDados();

    //Incluir um Novo Cadastro
    let strNome = document.getElementById('campoNome').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strSenha = document.getElementById('campoSenha').value;
    let novoCadastro = {
        Nome: strNome,
        Email: strEmail,
        Senha: strSenha
    };
    db.push(novoCadastro);

    //Salvar os Dados no localStorage novamente
    salvaDados(objDados);
}

//Função de Login
function loginDados() {
    var Email = document.querySelector("input#Email").value;
    var Senha = document.querySelector("input#Senha").value;

    for (let i = 0; i < db.length; i++) {
        var usuario = db[i];
        console.log(usuario);

        //Verifica se o Usuário é Valido
        console.log(Email);
        console.log(Senha);
        console.log(usuario.Email);
        console.log(usuario.Senha);
        console.log(typeof (Email));
        console.log(typeof (Senha));
        console.log(typeof (usuario.Email));
        console.log(typeof (usuario.Senha));

        if (Email == usuario.Email && Senha == usuario.Senha) {
            alert("Entrou");
            localStorage.setItem("acesso", true);

            window.alert("Login Sucedido");

        }
    }

}
/*function loginDados() {
    var Email = document.querySelector("input#Email").value;
    var Senha = document.querySelector("input#Senha").value;
    let objDados = lerDados();

    //Verifica todos os Cadastros de login
    for(i=0; i< objDados.Cadastros.lenght; i++){
        var usuario = objDados.Cadastros[i];

        //Verifica se o Usuário é Valido
        if (Email == usuario.Email && Senha == usuario.Senha ){
            Cadastros.Email = usuario.Email;
            Cadastros.Senha = usuario.Senha;
            //Salva os Dados de Login
            salvaDados();

            return true;
        }
        else{
            alert ("Usuário ou Senha Inválidos!");
        }
    }
    return false;
}*/



