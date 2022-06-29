import { model as createModel } from 'mongoose';
import { ITournament, TournamentSchema } from '../schemas/tournament.schema';

class TournamentModel {
  constructor(private readonly tournamentModel = createModel<ITournament>('tournaments', TournamentSchema)) { }

  public async findAll(): Promise<ITournament[]> {
    return this.tournamentModel.find().exec();
  }
}

export { TournamentModel };
