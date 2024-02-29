module.exports = (app) => {
  const pedidoController = require("../controllers/pedido.controller.js");
  const auth = require("../middlewares/auth_jwt_middleware");

  app.post(
    "/pedidos",
    [auth.verifyToken, auth.isBalcao],
    pedidoController.create
  );
  app.get("/pedidos", [auth.verifyToken], pedidoController.findAll);
  app.get("/pedidos/:id", [auth.verifyToken], pedidoController.findById);
  app.put(
    "/pedidos/:id",
    [auth.verifyToken, auth.isBalcao],
    pedidoController.update
  );
  app.delete(
    "/pedidos/:id",
    [auth.verifyToken, auth.isBalcao],
    pedidoController.delete
  );
  app.delete(
    "/pedidos",
    [auth.verifyToken, auth.isBalcao],
    pedidoController.deleteAll
  );
};
