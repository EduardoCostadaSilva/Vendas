module.exports = (app) => {
  const usuarioController = require("../controllers/usuario.controller");

  app.post("/signup", usuarioController.signUp);
  app.post("/signin", usuarioController.signIn);
  app.get("/usuarios", usuarioController.findAll);
  app.get("/usuarios/:idusuario", usuarioController.findById);
  app.put("/usuarios/:idusuario", usuarioController.update);
  app.delete("/usuarios/:idusuario", usuarioController.delete);
  app.delete("/usuarios", usuarioController.deleteAll);
};
