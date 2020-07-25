let express = require('express');
let morgan = require('morgan');
//Importar las Rutas
let productoRouter = require("./routes/productos");
let userRouter = require("./routes/users.js");

//Habilitando express
let app = express();
app.use(morgan("dev"));
// Config
let port = 4000;
let host = "127.0.0.1";

//Habilitar Peticiones en formato json
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

//Habilitando las rutas
app.use("/producto", productoRouter);
app.use("/user", userRouter);



app.listen(port, host, () => {
    console.log(`Servidor levantado en: http://${host}:${port}`)
})