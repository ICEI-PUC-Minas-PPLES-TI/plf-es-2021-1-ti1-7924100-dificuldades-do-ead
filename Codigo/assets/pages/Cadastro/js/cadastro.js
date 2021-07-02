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
        alert("Preencha os campos!");
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