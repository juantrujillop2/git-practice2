const mongoose = require("mongoose");
const personSchedule = mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true, min: 18 },
    address: {
        type: Object,
        require: true,
        city: { type: String, require: true },
        code_city: { type: Number, require: true },
        lat: { type: Number, require: true },
        long: { type: Number, require: true, min: 0 },
    },
    pets: { type: Array, require: true },
});

module.exports = mongoose.model("personCollection", personSchedule);
[5: 51 p.m., 15 / 7 / 2022] Juan Pablo Giraldo: _________________
[5: 51 p.m., 15 / 7 / 2022] Juan Pablo Giraldo: const express = require("express");
const personModel = require("../models/person");
const routes = express.Router();

/* 1. Creación de una persona */
routes.post("/person", (req, res) => {
    /* Se debe instanciar el modelo */
    const newPerson = personModel(req.body);
    newPerson
        .save()
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

/* Listar los registros existentes */
routes.get("/", (req, res) => {
    personModel
        .find()
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

/* Consultar un registro especifico */
routes.get("/:idPerson", (req, res) => {
    const { idPerson } = req.params;
    personModel
        .findById({ _id: idPerson })
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

/* Actualizar registro en la BD */
routes.put("/:idPerson", (req, res) => {
    const { idPerson } = req.params;
    const { name, lastname, email, age, address, pets } = req.body;
    personModel
        .updateOne(
            { _id: idPerson },
            { $set: { name, lastname, email, age, address, pets } }
        )
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

/* Eliminar registro en la BD */
routes.delete("/:idPerson", (req, res) => {
    const { idPerson } = req.params;
    personModel
        .deleteOne({ _id: idPerson })
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

module.exports = routes;