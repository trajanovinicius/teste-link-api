const express = require("express");
const routes = express.Router();

const OportunityController = require("./controllers/OportunityController");

routes.post("/oportunity", OportunityController.store);

routes.get("/oportunity", OportunityController.index);

module.exports = routes;
