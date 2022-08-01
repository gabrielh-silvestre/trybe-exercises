import { ITournament } from '../schemas/tournament.schema';

import { TournamentModel } from '../model/tournaments.model';

class TournamentService {
  constructor(private readonly tournamentModel = new TournamentModel()) { }

  public async findAll(): Promise<ITournament[]> {
    return this.tournamentModel.findAll();
  }

  public async findByYear(year: number): Promise<ITournament | never> {
    const tournament = await this.tournamentModel.findByYear(year);

    if (!tournament) {
      throw new Error(`Tournament with year ${year} not found`);
    }

    return tournament;
  }

  public async create(tournament: ITournament): Promise<ITournament> {
    return this.tournamentModel.create(tournament);
  }
}

export { TournamentService };
