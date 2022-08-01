import "express-async-errors";
import express, { ErrorRequestHandler } from "express";

import { MongoConnection } from "./model/connection";
import { TournamentController } from "./controller/tournament.controller";

const app = express();
app.use(express.json());

MongoConnection.connect();

const tournamentController = new TournamentController();

app.get("/", tournamentController.findAll);
app.get("/:year", tournamentController.findByYear);

app.post("/", tournamentController.create);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err.message);
  console.error(err.stack);
  res.status(500).send(err.message);
};

app.use(errorHandler);

export { app };
