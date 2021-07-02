//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}
// Tornando os dados recuperados em um objeto

//[---------------Alterar nome-------------]
function alterarNome() {


    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb);

    let teste = false;

    var Nome = document.querySelector("input#Nome").value;

    let i;

    for (i = 0; i < db.usuarios.length; i++) {

        if (db.usuarios[i].id == db.usuarioLogadoAtualmente && Nome != null) {

            teste = window.confirm("Tem certeza que deseja alterar o email?");

            break;
        }

    }

    if (teste) {

        db.usuarios[i].Nome = Nome;

        console.log(Nome);
        console.log(db)
        console.log(db.usuarios);

        window.alert("Nome alterado com sucesso");

        salvaDados(db);

    }
    else {
        console.log("Erro");
    }

}
//[---------------Alterar email-------------]
function alterarEmail() {


    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb);

    let teste = false;

    var Email = document.querySelector("input#Email").value;

    let i;

    for (i = 0; i < db.usuarios.length; i++) {

        if (db.usuarios[i].id == db.usuarioLogadoAtualmente && Email != null) {

            teste = window.confirm("Tem certeza que deseja alterar o email?");

            break;
        }

    }

    if (teste) {



        db.usuarios[i].Email = Email;

        console.log(Email);
        console.log(db)
        console.log(db.usuarios);

        window.alert("Email alterado com sucesso");

        salvaDados(db);

    }
    else {
        console.log("Erro");
    }

}

//[---------------Alterar email-------------]
function alterarSenha() {


    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb);

    let teste = false;

    var Senha = document.querySelector("input#Senha").value;

    let i;

    for (i = 0; i < db.usuarios.length; i++) {

        if (db.usuarios[i].id == db.usuarioLogadoAtualmente && Senha != null) {

            teste = window.confirm("Tem certeza que deseja alterar a senha?");

            break;
        }

    }

    if (teste) {

        db.usuarios[i].Senha = Senha;

        console.log(Senha);
        console.log(db)
        console.log(db.usuarios);

        window.alert("Senha alterado com sucesso");

        salvaDados(db);

    }
    else {
        console.log("Erro");
    }

}



