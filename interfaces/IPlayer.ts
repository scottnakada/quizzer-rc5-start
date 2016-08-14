

interface IPlayer {
  current: any;
  showAnswers: boolean;
  index:number;
  total:number;
  right:number;
  percent:number;
  responses:Array<any>;

  title: string;
  tagLine: string;
  added: string;
  rating: number;
  _id: number;
  tags: string[];
  quiz: IQuiz;
}