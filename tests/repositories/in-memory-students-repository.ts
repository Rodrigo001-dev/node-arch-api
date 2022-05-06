import { StudentsRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

// criando uma representação do repositório como se fosse um 'banco de dados' em
// memória
export class InMemoryStudentsRepository implements StudentsRepository {
  // vai implementar isso salvando na memória(InMemory)
  // os meus estudantes, vão ser salvados dentro de um array de Student[]
  public items: Student[] = [];

  async findById(id: string): Promise<Student | null> {
    const student = this.items.find(student => student.id === id);

    if (!student) {
      return null;
    }

    return student;
  }
}