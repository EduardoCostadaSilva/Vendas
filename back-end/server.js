const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

//parser para requisições content-type:
//application/x-www-form-urlencoded-json
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  app.use(cors());
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  


//linhas das rotas
require("./app/routes/produto.routes")(app);
require("./app/routes/pedido.routes")(app);
require("./app/routes/produto_pedidos.routes")(app);
require("./app/routes/usuario.routes")(app);

app.get("/", (req, res) => {
  res.json({
    message: "Bem-Vindo a API MVC do Senac ",
  });
});

app.listen(3002, () => {
  console.log("Servidor rodando na porta 3002");
});

//Para que tudo der certo dê start no XAMPP, em Apache e MySQL
