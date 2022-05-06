import { ChallengesRepository } from '../../src/application/repositories/ChallengesRepository';
import { Challenge } from "../../src/domain/entities/challenge";

// criando uma representação do repositório como se fosse um 'banco de dados' em
// memória
export class InMemoryChallengesRepository implements ChallengesRepository {
  // vai implementar isso salvando na memória(InMemory)
  // os meus estudantes, vão ser salvados dentro de um array de Challenge[]
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(Challenge => Challenge.id === id);

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}