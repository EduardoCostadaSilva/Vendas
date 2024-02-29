module.exports = (app) => {
  const produtoController = require("../controllers/produto.controller");
  const auth = require("../middlewares/auth_jwt_middleware");

  app.post(
    "/produtos",
    [auth.verifyToken, auth.isAdmin],
    produtoController.create
  );

  app.get("/produtos", /*[auth.verifyToken],*/ produtoController.findAll);

  app.get("/produtos/:id", [auth.verifyToken], produtoController.findById);

  app.put(
    "/produtos/:id",
    [auth.verifyToken, auth.isAdmin],
    produtoController.update
  );

  app.delete(
    "/produto/:id",
    [auth.verifyToken, auth.isAdmin],
    produtoController.delete
  );

  app.delete(
    "/produtos",
    [auth.verifyToken, auth.isAdmin],
    produtoController.deleteAll
  );
};
