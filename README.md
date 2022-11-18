# La Boleria

<p align="center">
  <img height=300 src="https://cdn-icons-png.flaticon.com/512/619/619502.png">
</p>
<h1 align="center">
  La Boleria
</h1>
<div align="center">

  <h3>Ferramentas</h3>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  
</div>

<br/>

# Descrição

DrivenPass é um sistema de gerenciamento de pedidos para uma loja de bolos.

</br>

## Características

-   Cadastro de bolos;
-   Cadastro de clientes;
-   Cadastro de comandas;
-   Busca de comandas;


</br>

## Referências da API

### BOLOS

### Adicionar bolo

```http
POST /cakes
```

#### Request:

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `name`           | `string` | **Required**. Nome do bolo |
| `price`         | `number` | **Required**. Preço do bolo |
| `description` | `string` | **Required**. Descrição do bolo|
| `image` | `string` | **Required**. Url de uma imagem|

#

### CLIENTES

### Adicionar cliente

```http
POST /clients
```

#### Request:

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `name`           | `string` | **Required**. Nome do cliente |
| `address`         | `string` | **Required**. Endereço do cliente |
| `phone` | `string` | **Required**. Telefone do cliente |

#

### Buscar comandas por clientes

```http
GET /clients/:id/orders
```


#### Response:

```json
 [
  {
    "orderId": 1,
    "quantity": 2,
    "createdAt": "2022-08-18T03:00:00.000Z",
    "totalPrice": "4000",
    "cakeName": "Bolo de Cenoura"
  }
]
```

#


### COMANDAS

### Adicionar comanda

```http
POST /order
```

#### Request:

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `clientId`           | `number` | **Required**. Id do cliente |
| `cakeId`         | `number` | **Required**. Título do bolo |
| `quantity` | `number` | **Required**. Quantidade de bolos; mínimo 1, máximo 4 |


#

### Buscar Comandas

```http
GET /orders
```
#

#### Response:

```json
 [
  {
    "client": {
      "id": 1,
      "name": "Leticia",
      "address": "Guaratingueta",
      "phone": "12988887777"
    },
    "cake": {
      "id": 1,
      "name": "Bolo de Cenoura",
      "price": "2000",
      "description": "Bolo de cenoura com calda de chocolate",
      "image": "https://images.aws.nestle.recipes/original/2b76e99abc4136ccf26008c1c38702"
    },
    "orderId": 1,
    "createdAt": "2022-08-18T03:00:00.000Z",
    "quantity": 2,
    "totalPrice": "4000"
  },
  {
    "client": {
      "id": 3,
      "name": "Teste",
      "address": "Aparecida",
      "phone": "12922225555"
    },
    "cake": {
      "id": 1,
      "name": "Bolo de Cenoura",
      "price": "2000",
      "description": "Bolo de cenoura com calda de chocolate",
      "image": "https://images.aws.nestle.recipes/original/2b76e99abc4136ccf26008c1c38702"
    },
    "orderId": 2,
    "createdAt": "2022-08-18T03:00:00.000Z",
    "quantity": 2,
    "totalPrice": "4000"
  }  
]
```

#

### Buscar comanda pelo id

```http
GET /orders/:id
```

#### Response:

```json
  [
  {
    "client": {
      "id": 1,
      "name": "Leticia",
      "address": "Guaratingueta",
      "phone": "12988887777"
    },
    "cake": {
      "id": 1,
      "name": "Bolo de Cenoura",
      "price": "2000",
      "description": "Bolo de cenoura com calda de chocolate",
      "image": "https://images.aws.nestle.recipes/original/2b76e99abc4136ccf26008c1c38702"
    },
    "orderId": 1,
    "createdAt": "2022-08-18T03:00:00.000Z",
    "quantity": 2,
    "totalPrice": "4000"
  }
]
```

#

## Variáveis de Ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis ​​de ambiente ao seu arquivo .env

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`


</br>

## Execute Localmente

Clone o projeto

```bash
  git clone https://github.com/Leticia-Pinheiro/LaBoleria_BackEnd
```

Vá para o diretório do projeto

```bash
  cd LaBoleria_BackEnd/
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

</br>

## Autora

Letícia Gomez Pinheiro 
<p>Linkedin: https://www.linkedin.com/in/leticia-pinheiro-33354a1b6/</p>
<p>GitHub: https://github.com/Leticia-Pinheiro</p>
<br/>

#


