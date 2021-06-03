var db = {
    usuarioLogadoAtualmente:0,
    indexDaListaDousuario:0,
    ultimoId:5,
    usuarios: [
        { id: 1, Nome: "Gabriel Victor", Email: "gabriel@yahoo.com.br", Senha: "gabriel1234" },
        { id: 2, Nome: "André De Oliveira", Email: "andre_1234@yahoo.com.br", Senha: "andre1234" },
        { id: 3, Nome: "Breno Rosa", Email: "breno_1234@yahoo.com.br", Senha: "breno1234" },
        { id: 4, Nome: "João Gabriel", Email: "joao_1234@yahoo.com.br", Senha: "joao1234" },
        { id: 5, Nome: "Admin", Email: "admin@admin.com", Senha: "admin" }
    ],
    listasUsuarios:[
        { id: 1, listas:[
            {
                lista_id:1, 
                lista_nome:'Lista exemplo', 
                lista_cor:'#FF006E',
                lista_itens:[
                    {
                        titulo:'Quiz da palestra',
                        descricao:'Para segunda feira um quiz sobre a palestra de Ana Regina',
                        data:'07/06/2021'
                    },
                    {
                        titulo:'Teste de software',
                        descricao:'Fazer teste de um software',
                        data:'10/06/2021'
                    }
                ]
            },
            {
                lista_id:2, 
                lista_nome:'Engenharia de software', 
                lista_cor:'#3A86FF',
                lista_itens:[
                    {
                        titulo:'Quiz da palestra',
                        descricao:'Para segunda feira um quiz sobre a palestra de Ana Regina',
                        data:'07/06/2021'
                    },
                    {
                        titulo:'Teste de software',
                        descricao:'Fazer teste de um software',
                        data:'10/06/2021'
                    }
                ]
            }
        ]},
        { id: 2,},
        { id: 3,},
        { id: 4,},
        { id: 5,},
    ]
}