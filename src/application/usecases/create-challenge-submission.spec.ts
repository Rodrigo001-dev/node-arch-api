import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const createChallengeSubmission = new CreateChallengeSubmission();

    const response = await createChallengeSubmission.execute({
      studentId: 'fake-student-id',
      challengeId: 'fake-challenge-id'
    });

    expect(response).toBeTruthy()
  });
});