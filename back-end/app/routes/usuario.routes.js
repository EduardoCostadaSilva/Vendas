module.exports = (app) => {
  const usuarioController = require("../controllers/usuario.controller");

  app.post("/signup", usuarioController.signUp);
  app.post("/signin", usuarioController.signIn);
  app.get("/usuarios", usuarioController.findAll);
  app.put("/usuarios/:idUsuario", usuarioController.update);
  app.delete("/usuarios/:idUsuario", usuarioController.delete);
  app.delete("/usuarios", usuarioController.deleteAll);
};
