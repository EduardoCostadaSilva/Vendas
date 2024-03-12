module.exports = (app) => {
  const produto_pedidoController = require("../controllers/produto_pedidos.controller.js");

  const auth = require("../middlewares/auth_jwt_middleware");
  app.post(
    "/produtos_pedidos",
    [auth.verifyToken, auth.isCozinha],
    produto_pedidoController.create
  );
  app.get(
    "/produtos_pedidos",
    /*[auth.verifyToken],*/ 
    produto_pedidoController.findAll
  );
  app.get(
    "/produtos_pedidos/:id",
    [auth.verifyToken],
    produto_pedidoController.findById
  );
  app.put(
    "/produtos_pedidos/:id",
    [auth.verifyToken, auth.isCozinha],
    produto_pedidoController.update
  );
  app.delete(
    "/produtos_pedidos/:id",
    [auth.verifyToken, auth.isCozinha],
    produto_pedidoController.delete
  );
  app.delete(
    "/produtos_pedidos",
    [auth.verifyToken, auth.isCozinha],
    produto_pedidoController.deleteAll
  );
};
