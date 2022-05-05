import { Entity } from "../../core/Domain/Entity";

type StudentProps = {
  name: string;
  email: string;
};

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  // o método create vai ser utilizado no lugar do constructor
  static create(props: StudentProps, id?: string) {
    const student = new Student(props, id);

    return student;
  }
}