// import express from 'express';

const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/users");
const activoModel = require("./models/activos");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://lcascante:cXe8bvl9pDpvWyeo@cluster1.pvkkrmw.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/activo/:id", async function (request, response) {
  const id = request.params.id;
  console.log("Atendiendo a la ruta GET /activo/:id/", id);
  try {
    console.log("Buscando el activo con id", id);
    const activoPorId = await activoModel.find({ _id: id });
    console.log("activo encontrado", activoPorId);
    response.status(201).send(activoPorId);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users/:id", async function (request, response) {
  const id = request.params.id;
  console.log("Atendiendo a la ruta GET /users/:id/", id);
  try {
    console.log("Buscando el usuario con id", id);
    const userPorId = await userModel.find({ _id: id });
    console.log("Usuario encontrado", userPorId);
    response.status(201).send(userPorId);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async function (request, response) {
  try {
    const users = await userModel.find({});
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/users", async function (request, response) {
  console.log("Atendiendo a la ruta POST /users", request);

  if (!request.body) {
    console.error("No se envió el body en la petición");
    response.status(400).send("No se envió el body en la petición");
    return;
  }

  const user = new userModel(request.body);

  try {
    console.log("Guardando el usuario", user);
    await user.save();
    // 201: Created
    console.log("Usuario creado", user);
    response.status(201).send(user);
  } catch (error) {
    console.error(error);
    // 500: Internal Server Error
    response.status(500).send(error);
  }
});

app.listen(3000, function () {
  console.log("El servidor está escuchando en el puerto 3000");
});
