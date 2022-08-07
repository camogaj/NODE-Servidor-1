const mongoose = require("mongoose");
const express = require("express");
const connect = require("./utils/db");
const Movie = require("./models/movies");
const { restart } = require("nodemon");

const server = express();
connect();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const peliculas = await Movie.find();
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pelicula = await Movie.findById(id);
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/titulo/:titulo", async (req, res) => {
  try {
    const title = req.params.titulo;
    const pelicula = await Movie.find({
      title,
    });
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/genero/:genero", async (req, res) => {
  try {
    const genero = req.params.genero;
    const pelicula = await Movie.find({
      genre:genero
    });
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/anio", async(req, res) =>{
  try {
    const peliculas = await Movie.find({year:{$gte: 2010}})
    res.status(200).send(peliculas) 
  } catch (error) {
    console.log(error)
  }

})
async function prueba(){
  const peliculas = await Movie.find({year:{$gte: 2010}})
  console.log(peliculas)
}
server.use("/", router);
server.listen(4001, () => console.log("Servidor iniciado"));
