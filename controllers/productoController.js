var productos = [];

function listar(req, res, next) {
    res.json({
        datos: productos
    });
}

function guardar(req, res, next) {

    productos.push(req.body);

    res.json({
        mensaje: "El producto se ha registrado"
    });
}

function mostrar(req, res, next) {
    var id = req.params.id;
    res.json({
        dato: productos[id]
    });
}

function modificar(req, res, next) {
    var id = req.params.id;
    productos[id] = req.body;

    res.json({
        mensaje: "El producto se ha modificado"
    });
}

function eliminar(req, res, next) {
    var id = req.params.id;
    productos.splice(id, 1);
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}