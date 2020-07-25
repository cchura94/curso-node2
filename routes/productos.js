var express = require('express');
var router = express.Router();
// importando el controlador
var productoController = require("./../controllers/productoController");

router.get("/", productoController.listar)
router.post("/", productoController.guardar)
router.get("/:id", productoController.mostrar)
router.put("/:id", productoController.modificar)
router.delete("/:id", productoController.eliminar)

module.exports = router;