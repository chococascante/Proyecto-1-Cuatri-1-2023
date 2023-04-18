const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/users");
const activosModel = require("./models/activos");
const sendEmail = require("./lib/email");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://lcascante:cXe8bvl9pDpvWyeo@cluster1.pvkkrmw.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", function (request, response) {
  response.send("Hola mundo");
});

app.get("/users/:id/", async function (request, response) {
  const id = request.params.id;
  console.log("Atendiendo a la ruta GET /users/:id/", id);
  try {
    console.log("Buscando el usuario con el id", id);
    const userPorId = await userModel.findOne({ _id: id });
    console.log("Usuario encontrado", userPorId);
    response.status(200).send(userPorId);
  } catch (error) {
    console.error(error);
    console.status(404).send(error);
  }
});

app.post("/users", async function (request, response) {
  console.log("Atendiendo a la ruta POST /users", request);

  if (!request.body) {
    console.error("No se envío el body en la petición.");
    response.status(500).send("No se envío el body en la petición.");
    return;
  }

  // Generamos la contraseña
  const randomPassword = Math.random().toString(36).slice(-8);

  // Agregamos la contraseña al body
  request.body.password = randomPassword;

  console.log("Creando usuario con datos:", request.body);
  const user = new userModel(request.body);

  try {
    console.log("Guardando el usuario", user);
    await user.save();
    console.log("Usuario creado", user);

    // Enviamos el correo
    await sendEmail({
      correo: user.correo,
      password: randomPassword,
    });

    response.status(201).send(user);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
});

app.post("/activos", async function (request, response) {
  console.log("Atendiendo a la ruta POST /activos", request);

  if (!request.body) {
    console.error("No se envío el body en la petición.");
    response.status(500).send("No se envío el body en la petición.");
    return;
  }

  console.log("Creando activo con datos:", request.body);
  const activo = new activosModel(request.body);

  try {
    console.log("Guardando el activo", activo);
    await activo.save();
    console.log("Activo creado", activo);
    response.status(201).send(activo);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
});

app.get("/users", async function (request, response) {
  console.log("Atendiendo a la ruta GET /users", request);
  try {
    const users = await userModel.find({});
    response.status(200).send(users);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
});

app.post("/login", async function (request, response) {
  console.log("Atendiendo a la ruta POST /login", request.body);

  if (!request.body) {
    console.error("No se envío el body en la petición.");
    response.status(500).send("No se envío el body en la petición.");
    return;
  }

  const { correo, password } = request.body;

  try {
    console.log("Buscando el usuario con el correo", correo);
    const userPorId = await userModel.findOne({ correo: correo });
    if (!userPorId) {
      response.status(404).send("Usuario no encontrado");
      return;
    }

    if (userPorId.password !== password) {
      response.status(401).send("Contraseña incorrecta");
      return;
    }

    console.log("Usuario encontrado", userPorId);
    response.status(200).send(userPorId);
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
});

app.listen(3000, function () {
  console.log("El servidor está escuchando en el puerto 3000");
});
