import { Entity } from "../../core/Domain/Entity";

type ChallengeProps = {
  title: string;
  instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  // o método create vai ser utilizado no lugar do constructor
  // o método create é static porque ele precisa ser chamado sem instânciar
  static create(props: ChallengeProps, id?: string) {
    const challenge = new Challenge(props, id);

    return challenge;
  }
}