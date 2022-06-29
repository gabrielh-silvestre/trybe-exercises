import { ITournament } from '../schemas/tournament.schema';

import { TournamentModel } from '../model/tournaments.model';

class TournamentService {
  constructor(private readonly tournamentModel = new TournamentModel()) { }

  public async findAll(): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.findAll();
    return tournaments;
  }
}

export { TournamentService };
