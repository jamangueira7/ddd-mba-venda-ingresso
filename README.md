<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>
<br>

# TAJS - Coverages

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJs](https://nodejs.org/en) v22.3.0
- [NPM](https://www.npmjs.com/) 10.8.1
- [NestJS](https://nestjs.com/) - 10.0.0
- [Docker](https://nestjs.com/) - 26.1.4

## 💻 Projeto

- [x] - DDD - Domain Driven Design.
- [x] - Use o arquivo `api.http` para executar as requisições HTTP. 

### Testes

![image.png](.github%2Fimage.png)


## 🚀 Como Rodar

### Abra  pasta do treinamento

Faça o clone.

```shell
git clone git@github.com:jamangueira7/ddd-mba-venda-ingresso.git
```

Na pasta onde você guarda todos os arquivos do projeto `ddd-mba-venda-ingresso`

```shell
cd tajs-erickwendel
```

e então Restaure os pacotes:

```shell
npm ci --silent
```

### Executando testes

Para executá-los
```shell
npm run test
```

### Executando o projeto

```shell
npm start
```

Api `http://localhost:3000s`

## ↗ Rotas

- **`GET /`**: Rota basica

Retorna:
```
  {
    Hello World!
  },
```

- **`GET /partners`**: Rota pegar parceiros

Retorna:
```
[
    {
        "id": "438c58d2-47fe-418d-9032-f224e2d09c6d",
        "name": "Partner 1"
    }
]
```

- **`POST /partners`**: Rota cadastrar parceiros

Envia:
```
{
  "name": "Partner Teste"
}
```

Retorna:
```
{
    "id": "ea13b17e-d95c-49e4-95d4-0f843b90ff30",
    "name": "Partner Teste"
}
```

- **`POST /customers`**: Rota cadastrar clientes

Envia:
```
{
  "name": "Customer 1",
  "cpf": "592.110.870-74"
}
```

Retorna:
```
{
    "id": {
        "_value": "0d3309f9-58f9-49fa-afd1-d1c1fbdce40c"
    },
    "cpf": {
        "_value": "59211087074"
    },
    "name": "Customer 1"
}
```

- **`GET /customers`**: Rota pegar clientes
Retorna:
```
[
    {
        "id": {
            "_value": "0d3309f9-58f9-49fa-afd1-d1c1fbdce40c"
        },
        "cpf": {
            "_value": "59211087074"
        },
        "name": "Customer 1"
    }
]
```

- **`POST /events`**: Rota cadastrar eventos

Envia:
```
{
    "name": "Event 1",
    "description": "Description 1",
    "date": "2020-01-01T00:00:00.000Z",
    "partner_id": "ea13b17e-d95c-49e4-95d4-0f843b90ff30"
}
```

Retorna:
```
{
    "id": "33655e9f-33f2-4699-b101-1622993af17a",
    "name": "Event 1",
    "description": "Description 1",
    "date": "2020-01-01T00:00:00.000Z",
    "is_published": false,
    "total_spots": 0,
    "total_spots_reserved": 0,
    "partner_id": "ea13b17e-d95c-49e4-95d4-0f843b90ff30",
    "sections": []
}
```

- **`GET /events`**: Rota pegar eventos

Retorna:
```
[
    {
        "id": "16e4d918-edea-4cf9-8d05-d85022374953",
        "name": "Event 1",
        "description": "Event 1 description",
        "date": "2024-08-06T12:29:30.000Z",
        "is_published": false,
        "total_spots": 1000,
        "total_spots_reserved": 0,
        "partner_id": "11d260a6-f962-4afb-856c-14f71289d573",
        "sections": [
            {
                "id": "3f08642a-a588-4c53-8841-8d5f2198b2bc",
                "name": "Section 1",
                "description": "Section 1 description",
                "is_published": false,
                "total_spots": 1000,
                "total_spots_reserved": 0,
                "price": 100,
                "spots": [
                    {
                        "id": "015cc179-0c94-4b7b-8529-f0df5ad7696b",
                        "location": null,
                        "reserved": false,
                        "is_published": false
                    }
                ]
            }
        ]
    }
    {
        "id": "33655e9f-33f2-4699-b101-1622993af17a",
        "name": "Event 2",
        "description": "Description 1",
        "date": "2020-01-01T00:00:00.000Z",
        "is_published": false,
        "total_spots": 0,
        "total_spots_reserved": 0,
        "partner_id": "ea13b17e-d95c-49e4-95d4-0f843b90ff30",
        "sections": []
    }
]
```

- **`GET /events/{{event_id}}/sections`**: Rota pegar seções de um evento

Retorna:
```
[
    {
      "id": "3f08642a-a588-4c53-8841-8d5f2198b2bc",
      "name": "Section 1",
      "description": "Section 1 description",
      "is_published": false,
      "total_spots": 1000,
      "total_spots_reserved": 0,
      "price": 100,
      "spots": [
          {
              "id": "015cc179-0c94-4b7b-8529-f0df5ad7696b",
              "location": null,
              "reserved": false,
              "is_published": false
          }
      ]
    }
]
```

- **`POST /events/{{event_id}}/sections`**: Rota cadastrar seções de um evento

Envia:
```
{
  "name": "Section Teste",
  "description": "Description Teste",
  "total_spots": 3,
  "price": 200
}
```

Retorna:
```
{
    "id": "33655e9f-33f2-4699-b101-1622993af17a",
    "name": "Event 1",
    "description": "Description 1",
    "date": "2020-01-01T00:00:00.000Z",
    "is_published": false,
    "total_spots": 3,
    "total_spots_reserved": 0,
    "partner_id": "ea13b17e-d95c-49e4-95d4-0f843b90ff30",
    "sections": [
        {
            "id": "942411eb-0ef9-47cd-bbcd-a836193850da",
            "name": "Section Teste",
            "description": "Description Teste",
            "is_published": false,
            "total_spots": 3,
            "total_spots_reserved": 0,
            "price": 200,
            "spots": [
                {
                    "id": "42471377-8b4c-467a-bf04-596f659276c3",
                    "location": null,
                    "reserved": false,
                    "is_published": false
                },
                {
                    "id": "77827c10-1611-4dee-a713-635a7631bdf4",
                    "location": null,
                    "reserved": false,
                    "is_published": false
                },
                {
                    "id": "ea4c306e-a9f0-465f-91e4-830394592653",
                    "location": null,
                    "reserved": false,
                    "is_published": false
                }
            ]
        }
    ]
}
```

- **`PUT /events/{{event_id}}/publish-all`**: Rota para publicar todas os assentos do evento

Retorna:
```
{
    "id": "33655e9f-33f2-4699-b101-1622993af17a",
    "name": "Event 1",
    "description": "Description 1",
    "date": "2020-01-01T00:00:00.000Z",
    "is_published": true,
    "total_spots": 3,
    "total_spots_reserved": 0,
    "partner_id": "ea13b17e-d95c-49e4-95d4-0f843b90ff30",
    "sections": [
        {
            "id": "942411eb-0ef9-47cd-bbcd-a836193850da",
            "name": "Section Teste",
            "description": "Description Teste",
            "is_published": true,
            "total_spots": 3,
            "total_spots_reserved": 0,
            "price": 200,
            "spots": [
                {
                    "id": "42471377-8b4c-467a-bf04-596f659276c3",
                    "location": null,
                    "reserved": false,
                    "is_published": true
                },
                {
                    "id": "77827c10-1611-4dee-a713-635a7631bdf4",
                    "location": null,
                    "reserved": false,
                    "is_published": true
                },
                {
                    "id": "ea4c306e-a9f0-465f-91e4-830394592653",
                    "location": null,
                    "reserved": false,
                    "is_published": true
                }
            ]
        }
    ]
}
```

- **`PUT /events/{{event_id}}/sections/{{section_id}}`**: Rota para alterar uma seção de um evento
Envia:
```
{
  "name": "Section 1 updateddddd",
  "description": "Description 1 updatedddd"
}
```

Retorna:
```
[
    {
        "id": "942411eb-0ef9-47cd-bbcd-a836193850da",
        "name": "Section 1 updateddddd",
        "description": "Description 1 updatedddd",
        "is_published": true,
        "total_spots": 3,
        "total_spots_reserved": 0,
        "price": 200,
        "spots": [
            {
                "id": "42471377-8b4c-467a-bf04-596f659276c3",
                "location": null,
                "reserved": false,
                "is_published": true
            },
            {
                "id": "77827c10-1611-4dee-a713-635a7631bdf4",
                "location": null,
                "reserved": false,
                "is_published": true
            },
            {
                "id": "ea4c306e-a9f0-465f-91e4-830394592653",
                "location": null,
                "reserved": false,
                "is_published": true
            }
        ]
    }
]
```

- **`GET /events/{{event_id}}/sections/{{section_id}}/spots`**: Rota para pegar um assento de uma seção de um evento

Retorna:
```
[
    {
        "id": "42471377-8b4c-467a-bf04-596f659276c3",
        "location": null,
        "reserved": false,
        "is_published": true
    },
    {
        "id": "77827c10-1611-4dee-a713-635a7631bdf4",
        "location": null,
        "reserved": false,
        "is_published": true
    },
    {
        "id": "ea4c306e-a9f0-465f-91e4-830394592653",
        "location": null,
        "reserved": false,
        "is_published": true
    }
]
```

- **`PUT /events/{{event_id}}/sections/{{section_id}}/spots/{{spot_id}}`**: Rota para alterar um assento de uma seção de um evento

Envia:
```
{
  "location": "Location 1 updateddddqqqq"
}
```

Retorna:
```
{
    "id": "42471377-8b4c-467a-bf04-596f659276c3",
    "location": "Location 1 updateddddqqqq",
    "reserved": false,
    "is_published": true
}
```

- **`GET /events/{{event_id}}/orders`**: Rota para pegar todas as ordens de um evento
Retorna:
```
[
    {
        "id": "0c35285d-7960-443a-b471-416aba8c54b2",
        "amount": 100,
        "customer_id": "ae0731db-48c6-4fbf-951d-fbc9c0ab5daf",
        "event_spot_id": "a188030b-d115-454a-bdc6-a6093dbf1442"
    },
    {
        "id": "b7c7b3ed-afd0-46cc-a028-817222b78514",
        "amount": 100,
        "customer_id": "ae0731db-48c6-4fbf-951d-fbc9c0ab5daf",
        "event_spot_id": "a188030b-d115-454a-bdc6-a6093dbf1442"
    }
]
```

- **`POST /events/{{event_id}}/orders`**: Rota para cadastrar uma ordens de um evento

Envia:
```
{
    "customer_id": "0d3309f9-58f9-49fa-afd1-d1c1fbdce40c",
    "section_id": "942411eb-0ef9-47cd-bbcd-a836193850da",
    "spot_id": "77827c10-1611-4dee-a713-635a7631bdf4",
    "card_token": "tok_visa"
}
```

Retorna:
```
{
    "id": "3ac27a23-3fd4-4568-afa4-a3f012116ef0",
    "amount": 200,
    "customer_id": "0d3309f9-58f9-49fa-afd1-d1c1fbdce40c",
    "event_spot_id": "77827c10-1611-4dee-a713-635a7631bdf4"
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.