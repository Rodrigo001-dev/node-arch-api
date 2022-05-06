import { Submission } from "../../domain/entities/submission";

import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  // eu não sei a implementação do repositório dentro do useCase mas eu sei o
  // formato do repositório
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository,
  ) {}

  async execute({studentId, challengeId}: CreateChallengeSubmissionRequest) {
    // fazendo uma verificação
    const student = await this.studentsRepository.findById(studentId);

    // se o estudante não existir
    if (!student) {
      // vai retornar um erro
      throw new Error('Students does not exists.');
    }

    // fazendo uma verificação
    const challenge = await this.challengesRepository.findById(challengeId);

    // se o challenge não existir
    if (!challenge) {
      // vai retornar um erro
      throw new Error('Challenge does not exists.');
    }

    const submission = Submission.create({
      studentId,
      challengeId
    })

    return submission;
  };
}