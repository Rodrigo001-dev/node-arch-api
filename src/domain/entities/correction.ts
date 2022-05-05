import { Entity } from "../../core/Domain/Entity";

type CorrectionProps = {
  grade: number;
  submissionId: string;
  createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }

  // o método create vai ser utilizado no lugar do constructor
  static create(props: CorrectionProps, id?: string) {
    const correction = new Correction(props, id);

    return correction;
  }
}