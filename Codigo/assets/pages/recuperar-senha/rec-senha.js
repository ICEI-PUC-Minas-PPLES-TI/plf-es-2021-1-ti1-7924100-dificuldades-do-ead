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

            //window.location.href = "/plf-es-2021-1-ti1-7924100-dificuldades-do-ead/Codigo/login.html";//colocar link para pagina de login

            salvaDados(db)
        }
    }
}