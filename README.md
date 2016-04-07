# Nodejs-mysql


For testing copy repository:
```
git clone https://github.com/raylight75/NodejsCRUD
```
Install dependecies:
```
npm install
```

Import products.sql.

Configure database:
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
Root project:
```
node bin/www
```

Access of url:
[localhost:3000](http://localhost:3000)

Routes:
```
GET /articles -> get articles
POST /articles -> update articles

GET /articles/:id -> get articles by id
PUT /articles/:id -> update articles by id
DELETE /articles/:id ->delete articles
```
