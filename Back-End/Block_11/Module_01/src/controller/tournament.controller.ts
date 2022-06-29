import { Handler } from 'express';

import { TournamentService } from '../service/tournament.service';

class TournamentController {
  constructor(private readonly tournamentService = new TournamentService()) { }

  findAll: Handler = async (_req, res) => {
    const tournaments = await this.tournamentService.findAll();

    res.status(200).json(tournaments);
  }

  findByYear: Handler = async (req, res) => {
    const year = Number(req.params.year);

    const tournament = await this.tournamentService.findByYear(year);

    res.status(200).json(tournament);
  }

  create: Handler = async (req, res) => {
    const tournament = await this.tournamentService.create(req.body);

    res.status(201).json(tournament);
  }
}

export { TournamentController }
