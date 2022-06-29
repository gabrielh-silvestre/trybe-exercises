import { Handler } from 'express';

import { TournamentService } from '../service/tournament.service';

class TournamentController {
  constructor(private readonly tournamentService = new TournamentService()) { }

  findAll: Handler = async (_req, res) => {
    const tournaments = await this.tournamentService.findAll();

    res.status(200).json(tournaments);
  }
}

export { TournamentController }
