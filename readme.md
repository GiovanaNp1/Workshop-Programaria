# Workshop Programaria - Elasticsearch O que é Busca Avançada e como aplicar ela no nosso clássico Back-end

Olá a Todos, sejam bem vindos ao workshop do programaria, esse readme serve como um Guia sobre as principais Querys dentro do Elasticsearch para você ter o maior proveito do material oferecido. Lembrando que todos pode contribuir com o projeto como todo.

## Linguagens e libs utilizadas 📚
- Docker (Opcional)
- Postman ou Insominia
- Elastic Cloud
- NodeJs

## Querys de exemplo

Receitas
```
[
{
    "id": 1,
    "nome": "Bolo de Cenoura",
    "ingredientes": [
        "cenoura",
        "ovos",
        "óleo",
        "açúcar",
        "farinha de trigo",
        "fermento em pó"
    ],
    "modo_de_preparo": "Bata as cenouras, os ovos e o óleo no liquidificador. Em uma tigela, misture o açúcar, a farinha e o fermento. Acrescente a mistura do liquidificador e mexa bem. Asse em forno pré-aquecido a 180°C por cerca de 40 minutos.",
    "tempo_preparo_minutos": 60,
    "dificuldade": "fácil",
    "categoria": "bolos",
    "pais_origem": "Brasil"
},
{
    "id": 2,
    "nome": "Lasagna à Bolonhesa",
    "ingredientes": [
        "carne moída",
        "massa para lasanha",
        "queijo mussarela",
        "presunto",
        "molho de tomate",
        "cebola",
        "alho",
        "sal",
        "pimenta",
        "azeite"
    ],
    "modo_de_preparo": "Refogue a cebola e o alho no azeite, acrescente a carne e o molho de tomate. Cozinhe a massa da lasanha conforme instruções do pacote. Em um refratário, intercale camadas de massa, carne, presunto e queijo. Asse em forno a 180°C por 30 minutos.",
    "tempo_preparo_minutos": 90,
    "dificuldade": "média",
    "categoria": "massas",
    "pais_origem": "Itália"
},
{
    "id": 3,
    "nome": "Sushi Tradicional",
    "ingredientes": [
        "arroz para sushi",
        "vinagre de arroz",
        "nori",
        "peixe cru",
        "molho de soja",
        "wasabi"
    ],
    "modo_de_preparo": "Lave o arroz e cozinhe conforme instruções. Misture o vinagre ao arroz e deixe esfriar. Coloque uma camada de arroz sobre a alga, adicione o peixe e enrole. Sirva com molho de soja e wasabi.",
    "tempo_preparo_minutos": 45,
    "dificuldade": "difícil",
    "categoria": "oriental",
    "pais_origem": "Japão"
},
{
    "id": 4,
    "nome": "Guacamole",
    "ingredientes": [
        "abacate",
        "cebola",
        "tomate",
        "suco de limão",
        "coentro",
        "sal",
        "pimenta"
    ],
    "modo_de_preparo": "Amasse o abacate e misture com os demais ingredientes. Ajuste o sal e a pimenta a gosto. Sirva com nachos ou tortilhas.",
    "tempo_preparo_minutos": 10,
    "dificuldade": "fácil",
    "categoria": "aperitivos",
    "pais_origem": "México"
},
{
    "id": 5,
    "nome": "Paella",
    "ingredientes": [
        "arroz",
        "frango",
        "linguiça",
        "camarão",
        "mexilhão",
        "ervilhas",
        "pimentão",
        "alho",
        "cebola",
        "tomate",
        "caldo de peixe",
        "açafrão",
        "sal",
        "azeite"
    ],
    "modo_de_preparo": "Refogue o frango e a linguiça no azeite. Adicione alho, cebola, tomate e pimentão. Acrescente o arroz, o caldo de peixe e o açafrão. Cozinhe até o arroz ficar macio e finalize com os frutos do mar e as ervilhas.",
    "tempo_preparo_minutos": 120,
    "dificuldade": "difícil",
    "categoria": "pratos principais",
    "pais_origem": "Espanha"
},
{
    "id": 6,
    "nome": "Tiramisu",
    "ingredientes": [
        "biscoito champagne",
        "café",
        "cream cheese",
        "creme de leite",
        "açúcar",
        "cacau em pó"
    ],
    "modo_de_preparo": "Mergulhe os biscoitos no café. Em uma tigela, misture o cream cheese, o creme de leite e o açúcar. Em um refratário, faça camadas alternadas de biscoito e creme. Finalize com uma camada de cacau em pó. Leve à geladeira por algumas horas antes de servir.",
    "tempo_preparo_minutos": 40,
    "dificuldade": "média",
    "categoria": "sobremesas",
    "pais_origem": "Itália"
}

]
```
Viagens
```
{ "index" : { "_index" : "lugares", "_id" : "1" } }
{
    "nome": "Museu do Louvre",
    "tipo": "museu",
    "cidade": "Paris",
    "pais": "França",
    "localizacao": {
        "lat": 48.8606,
        "lon": 2.3376
    },
    "descricao": "Um dos maiores museus de arte do mundo, localizado no coração de Paris."
}
{ "index" : { "_index" : "lugares", "_id" : "2" } }
{
    "nome": "Estátua da Liberdade",
    "tipo": "monumento",
    "cidade": "Nova York",
    "pais": "Estados Unidos",
    "localizacao": {
        "lat": 40.6892,
        "lon": -74.0445
    },
    "descricao": "Símbolo de liberdade, localizado na Ilha da Liberdade em Nova York."
}
{ "index" : { "_index" : "lugares", "_id" : "3" } }
{
    "nome": "Cristo Redentor",
    "tipo": "monumento",
    "cidade": "Rio de Janeiro",
    "pais": "Brasil",
    "localizacao": {
        "lat": -22.9519,
        "lon": -43.2105
    },
    "descricao": "Uma das sete maravilhas do mundo moderno, localizado no Rio de Janeiro."
}
{ "index" : { "_index" : "lugares", "_id" : "4" } }
{
    "nome": "Torre Eiffel",
    "tipo": "monumento",
    "cidade": "Paris",
    "pais": "França",
    "localizacao": {
        "lat": 48.8584,
        "lon": 2.2945
    },
    "descricao": "Ícone de Paris, famosa torre de ferro construída em 1889."
}
{ "index" : { "_index" : "lugares", "_id" : "5" } }
{
    "nome": "Grande Muralha da China",
    "tipo": "histórico",
    "cidade": "Pequim",
    "pais": "China",
    "localizacao": {
        "lat": 40.4319,
        "lon": 116.5704
    },
    "descricao": "Antiga fortificação chinesa, uma das construções mais impressionantes do mundo."
}
{ "index" : { "_index" : "lugares", "_id" : "6" } }
{
    "nome": "Ópera de Sydney",
    "tipo": "cultural",
    "cidade": "Sydney",
    "pais": "Austrália",
    "localizacao": {
        "lat": -33.8568,
        "lon": 151.2153
    },
    "descricao": "Edifício icônico da Austrália, famoso por sua arquitetura única."
}

```



## Termos e conceitos

- **must** (equivalente a AND)
- **must_not** (equivalente a NOT).
- **should** (equivalente a OR).
- **bool** Sempre usado com o must, must_not e should e filter para fazer buscas com mais parametro
- **geo_distance** Fazer buscas por distancia, latitude e longitude

## Modo de uso com Docker

1 - Instale o Docker
2 - Rode no ser terminal o seguinte comando
```
docker run -d --name elasticsearch -p 9200:9200 -e "discovery.type=single-node" -e "ELASTIC_PASSWORD=minhasenha" docker.elastic.co/elasticsearch/elasticsearch:8.10.2

```
3 - Rode o docker ps para verificar se ele esta funcionando'
```
docker ps
```
4 - Para verificar se funcionou basta ir no https://localhost:9200
5- Caso queira visualizar o kibana tambem, é possivel utilizando o comando 
```
docker run -d --name kibana -p 5601:5601 --link elasticsearch:elasticsearch docker.elastic.co/kibana/kibana:8.10.2
```
6- quando for para a rota: http://localhost:5601/ ele irá pedir um enrollment-token que você vai conseguir usando 
```
 docker exec -it elasticsearch /bin/bash -c "bin/elasticsearch-create-enrollment-token --scope kibana"
```
7 - Depois disso ele tambem vai pedir um verification code do kibana que para conseguir bastar usar 
```
 docker exec -it kibana /bin/bash -c "bin/kibana-verification-code"
```