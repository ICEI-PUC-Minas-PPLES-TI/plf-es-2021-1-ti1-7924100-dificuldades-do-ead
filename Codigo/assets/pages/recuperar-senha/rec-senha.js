//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

//[---------------RECUPERAR SENHA-------------]
var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
var db = JSON.parse(preDb) // Tornando os dados recuperados em um objeto
function trocarSenha() {



    var Email = document.querySelector("input#Email").value;
    var Resposta = document.querySelector("input#Resposta").value;
    //var Senha = document.querySelector("input#Senha").value;
    var strSenha = document.querySelector('input#campoSenha').value;


    for (let i = 0; i < db.usuarios.length; i++) { //ler usuario do banco de dados
        var usuario = db.usuarios[i];

        if (Email == usuario.Email && Resposta == usuario.Resposta) { //identificar se a resposta está correta
            console.log(Email);
            console.log(Resposta);
            db.usuario[i].Senha = strSenha


            window.alert("Senha alterada com sucesso");

            //window.location.href = "#"; //colocar link para pagina de login

            salvaDados(db)
        }
    }
}

//[------------------------FIM RECUPERAR SENHA-----------]