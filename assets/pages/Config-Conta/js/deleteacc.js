//Função de Salvar os Dados
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}
// Tornando os dados recuperados em um objeto
//[---------------DELETAR CONTA-------------]


function deleteAcc() {


    var preDb = localStorage.getItem('db'); // Recuperando o banco de dados inteiro do localStorage
    var db = JSON.parse(preDb);
    
    let indexUsuario;

    let teste = false;

    for (let i = 0; i < db.usuarios.length; i++) {

        if (db.usuarios[i].id == db.usuarioLogadoAtualmente) {
            indexUsuario = i;

            teste = window.confirm("Deletar conta?");

            break;
        }

    }
    if (teste) {

        db.usuarios.splice(indexUsuario, 1);

        window.alert("Conta deletada com sucesso");
        
        salvaDados(db);

        window.location.href = "../../../index.html";
    }
    else {
        console.log("usuario não encontrado");
    }

   
}
