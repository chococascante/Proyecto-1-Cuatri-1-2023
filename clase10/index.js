const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo");
});

app.get("/hamburguesa", (req, res) => {
  res.send("Hamburguesa");
});

app.get("/pizza", (req, res) => {
  res.send("Pizza");
});

app.get("/sushi", (req, res) => {
  res.send("Sushi");
});

app.get("/unidad/:numero", (req, res) => {
  imprimirInformacionUnidad(req.params.numero);
  res.send(`Unidad ${req.params.numero}`);
});

app.get("/usuario/:id", (req, res) => {
  imprimirInformacionUsuario(req.params.id);
  res.send(`Usuario ${req.params.id}`);
});

app.listen(3000, function () {
  console.log("Escuchando en el puerto 3000");
});

function imprimirInformacionUsuario(id) {
  console.log(`Usuario ${id}`);
}

function imprimirInformacionUnidad(numero) {
  console.log(`Unidad ${numero}`);
}
