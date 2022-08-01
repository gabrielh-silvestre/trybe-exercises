import { model as createModel } from 'mongoose';
import { ITournament, TournamentSchema } from '../schemas/tournament.schema';

class TournamentModel {
  constructor(private readonly tournamentModel = createModel<ITournament>('tournaments', TournamentSchema)) { }

  public async findAll(): Promise<ITournament[]> {
    return this.tournamentModel.find().exec();
  }

  public async findByYear(year: number): Promise<ITournament | null> {
    return this.tournamentModel.findOne({ year }).exec();
  }

  public async create(tournament: ITournament): Promise<ITournament> {
    return this.tournamentModel.create(tournament);
  }
}

export { TournamentModel };
