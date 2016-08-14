
interface IQuizService {
  getQuizzes(): Promise<IQuizList[]>;
  getQuiz(id: string): Promise<IQuizList>;
}
