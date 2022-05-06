import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";

import { Student } from "../../domain/entities/student";
import { Challenge } from "../../domain/entities/challenge";

import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: 'Rodrigo',
      email: 'doe@example.com',
    });

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionsUrl: 'http://example.com',
    });

    // adicionando dentro do array
    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    const createChallengeSubmission = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    // se eu quero criar uma execução para o student(studentId) e para o
    // challenge(challengeId), eles precisam existir
    const response = await createChallengeSubmission.execute({
      studentId: student.id,
      challengeId: challenge.id
    });

    expect(response).toBeTruthy()
  });
});