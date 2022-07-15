const express = require("express");
const serieModel = require("../models/serie");
const routes = express.Router();

/* 1. Creación de una persona */
routes.post("/", (req, res) => {
    /* Se debe instanciar el modelo */
    const newSerie = serieModel(req.body);
    newSerie
        .save()
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

/* Listar los registros existentes */
routes.get("/", (req, res) => {
    //   serieModel
    //     .find()
    //     .then((data) => res.json({ data }))
    //     .catch((err) => res.json({ message: err }));
    res.json({ mensaje: "hola ya llegamos" })
});

/* Consultar un registro especifico */
routes.get("/:idSerie", (req, res) => {
    const { idSerie } = req.params;
    serieModel
        .findById({ _id: idSerie })
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

/*  */
routes.put("/:idSerie", (req, res) => {
    const { idSerie } = req.params;
    const { serie, number_season, original_lenguage, features_seasons } = req.body;
    serieModel
        .updateOne(
            { _id: idSerie },
            { $set: { name, lastname, email, age, address, pets } }
        )
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

routes.delete("/:idSerie", (req, res) => {
    const { idSerie } = req.params;
    serieModel
        .deleteOne({ _id: idSerie })
        .then((data) => res.json({ data }))
        .catch((err) => res.json({ message: err }));
});

module.exports = routes;
