var db = {
    usuarioLogadoAtualmente: 1,
    indexDaListaDousuario: 0,
    ultimoId: 5,
    usuarios: [{
        id: 1,
        Nome: "Gabriel Victor",
        Email: "gabriel@yahoo.com.br",
        Senha: "gabriel1234",
        Resposta: 'resp'
    },
    {
        id: 2,
        Nome: "André De Oliveira",
        Email: "andre_1234@yahoo.com.br",
        Senha: "andre1234",
        Resposta: 'resp'
    },
    {
        id: 3,
        Nome: "Breno Rosa",
        Email: "breno_1234@yahoo.com.br",
        Senha: "breno1234",
        Resposta: 'resp'
    },
    {
        id: 4,
        Nome: "João Gabriel",
        Email: "joao_1234@yahoo.com.br",
        Senha: "joao1234",
        Resposta: 'resp'
    },
    {
        id: 5,
        Nome: "Admin",
        Email: "admin@admin.com",
        Senha: "admin",
        Resposta: 'resp'
    }
    ],
    listasUsuarios: [{
        id: 1,
        listas: [{
            lista_id: 1,
            lista_nome: 'Lista exemplo',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        },
        {
            lista_id: 2,
            lista_nome: 'Engenharia de software',
            lista_cor: '#3A86FF',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }
        ]
    },
    {
        id: 2,
        listas: [],
    },

    {
        id: 3,
        listas: [{
            lista_id: 4,
            lista_nome: 'Lista exemplo1234',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Teste Lista',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Fundamentos de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        },
        {
            lista_id: 5,
            lista_nome: 'Fundamentos de software',
            lista_cor: '#ff0228',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }
        ]
    },
    {
        id: 4,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    {
        id: 5,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        },

        ]
    },
    {
        id: 6,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    {
        id: 7,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    {
        id: 8,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    {
        id: 9,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    {
        id: 10,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    {
        id: 11,
        listas: [{
            lista_id: 1,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021'
            },
            {
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021'
            }
            ]
        }],
    },
    ]
}