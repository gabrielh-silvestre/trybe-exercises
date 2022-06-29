import "express-async-errors";
import express, { ErrorRequestHandler } from "express";

import "./model/connection";
import { TournamentController } from "./controller/tournament.controller";

const app = express();
app.use(express.json());

const tournamentController = new TournamentController();

app.get("/", tournamentController.findAll);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err.message);
  console.error(err.stack);
  res.status(500).send("Something broke!");
};

app.use(errorHandler);

export { app };
