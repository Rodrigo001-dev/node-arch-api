import { Entity } from "../../core/Domain/Entity";

type SubmissionProps = {
  challengeId: string;
  studentId: string;
  createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  // o método create vai ser utilizado no lugar do constructor
  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, id);

    return submission;
  }
}