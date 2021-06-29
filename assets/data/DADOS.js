

/**
 * IDs de Usuário:
 *  - Uma string gerada pela função generateId(20),
 *    e possuem um comprimento de 20 caracteres
 * 
 * IDs do conjunto de listas pertencentes ao usuário:
 *  - identico ao ido do usuário
 * 
 * Ids de lista:
 *  - Um numero aleatorio entre 1 e 10 milhões
 *      gerado pela função generateListId();
 * 
 * Ids de Itens:
 *  - Um numero aleatório entre 10.000.001 e
 *      99.999.999.
 */

var db = {
    usuarioLogadoAtualmente: 1,
    indexDaListaDousuario: 0,
    ultimoId: 5,
    usuarios: [{
        id: '521618038d61da2073c0',
        Nome: "Gabriel Victor",
        Email: "gabriel@yahoo.com.br",
        Senha: "gabriel1234",
        Resposta: 'resp'
    },
    {
        id: '05ab516fec147d234ccd',
        Nome: "André De Oliveira",
        Email: "andre_1234@yahoo.com.br",
        Senha: "andre1234",
        Resposta: 'resp'
    },
    {
        id: '3ab5d72e24f6c319ac05',
        Nome: "Breno Rosa",
        Email: "breno_1234@yahoo.com.br",
        Senha: "breno1234",
        Resposta: 'resp'
    },
    {
        id: '96aad3c04efe6d324515',
        Nome: "João Gabriel",
        Email: "joao_1234@yahoo.com.br",
        Senha: "joao1234",
        Resposta: 'resp'
    },
    {
        id: 'cbec9af0c8860ab217c9',
        Nome: "Admin",
        Email: "admin@admin.com",
        Senha: "admin",
        Resposta: 'resp'
    }
    ],
    listasUsuarios: [{
        id: '521618038d61da2073c0',
        listas: [{
            lista_id: 8368221,
            lista_nome: 'Lista exemplo',
            lista_cor: '#FF006E',
            lista_itens: [{
                item_id: 31038404,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: true,
            },
            {
                item_id: 50035049,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: true,
            }
            ]
        },
        {
            lista_id: 9983067,
            lista_nome: 'Engenharia de software',
            lista_cor: '#3A86FF',
            lista_itens: [{
                item_id: 56293398,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {
                item_id: 59248853,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        }
        ]
    },
    {
        id: '05ab516fec147d234ccd',
        listas: [],
    },

    {
        id: '3ab5d72e24f6c319ac05',
        listas: [{
            lista_id: 8325530,
            lista_nome: 'Lista exemplo1234',
            lista_cor: '#FF006E',
            lista_itens: [{
                item_id: 36700815,
                titulo: 'Teste Lista',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {
                item_id: 71335908,
                titulo: 'Fundamentos de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        },
        {
            lista_id: 5556024,
            lista_nome: 'Fundamentos de software',
            lista_cor: '#ff0228',
            lista_itens: [{
                item_id: 19308503,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {

                item_id: 53959355,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        }
        ]
    },
    {
        id: '96aad3c04efe6d324515',
        listas: [{
            lista_id: 2676438,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                item_id: 42533692,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {
                item_id: 109114692,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        }],
    },
    {
        id: 'cbec9af0c8860ab217c9',
        listas: [{
            lista_id: 5059597,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                item_id: 72989238,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {
                item_id: 90772016,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        },

        ]
    },
    {
        id: '9cb440c2e6',
        listas: [{
            lista_id: 639151,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                item_id: 64934095,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {
                item_id: 78980281,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        }],
    },
    {
        id: '067fb15b5a',
        listas: [{
            lista_id: 9923297,
            lista_nome: 'Bem-Vindo!',
            lista_cor: '#FF006E',
            lista_itens: [{
                item_id: 24971090,
                titulo: 'Quiz da palestra',
                descricao: 'Para segunda feira um quiz sobre a palestra de Ana Regina',
                data: '07/06/2021',
                is_checked: false,
            },
            {
                item_id: 83610602,
                titulo: 'Teste de software',
                descricao: 'Fazer teste de um software',
                data: '10/06/2021',
                is_checked: false,
            }
            ]
        }],
    }

    ]
}