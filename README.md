# post-nodejs-mysql


Para testar a aplicação, baixe o repositório:
```
git clone https://github.com/nicholasess/post-nodejs-mysql
```
Instale as dependências:
```
npm install
```

Importe o arquivo lembrete.sql no seu banco de dados.

Troca os valores no arquivo app.js, o banco que importou o lembrete.sql você muda em database:
```
app.use(
  connection(mysql,{
    host: 'localhost',
    user: 'root',
    password : '123456',
    port : 3306, //port mysql
    database:'api'
  },'request')
);
```
E rode o projeto:
```
node bin/www
```

Acesse a url:
[localhost:3000](http://localhost:3000)

As rotas são essas:
```
GET /lembretes -> todos os lembretes
POST /lembretes -> cadastra os lembretes

GET /lembrete/:id -> retorna o perfil do lembrete através do id
PUT /lembrete/:id -> atualiza o lembrete através do id
DELETE /lembrete/:id -> exclui o lembrete através do id
```
