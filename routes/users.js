var express = require('express');
var router = express.Router();

var userController = require("./../controllers/userController");

router.get("/", userController.listar)
router.post("/", userController.guardar)
router.get("/:id", userController.mostrar)
router.put("/:id", userController.modificar)
router.delete("/:id", userController.eliminar)

module.exports = router;