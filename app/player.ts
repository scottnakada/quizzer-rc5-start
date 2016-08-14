import {Component, OnInit} from '@angular/core';
import {QuizService} from './quiz-service';
import {Seek} from './Seek';
import {RouteParams} from "@angular/router-deprecated";

// an internal class
class Position {
  index: number;
  total: number;

  constructor(maxPosition?: number) {
    this.total = maxPosition || 0;
    this.index = 0;
  }

  setMax(maxPosition: number) {
    this.total = maxPosition;
  }

  seek(direction: Seek) {
    switch (direction) {
      case Seek.Forward:
        if (this.index < this.total) {
          this.index += 1;
        }
        break;
      case Seek.Backward:
        if (this.index) {
          this.index -= 1;
        }
        break;
      case Seek.Beginning:
        this.index = 0;
    }
  }

  getPosition() {
    return this.index;
  }

  getTotal() {
    return this.total;
  }
}

@Component({
  selector: 'player',
  templateUrl: './templates/player.html'
})
export class PlayerComponent implements OnInit {
  questions: IQuizList;
  answers: Array<boolean[]> = [];
  position: Position;
  player: any;
  showAnswers: boolean = false;
  index = 0;
  total = 0;
  right = 0;
  percent = 0;
  responses = [];
  title = "";
  tagLine = "";

  current: IQuestion = {
    question: "",
    choices: []
  };

  constructor(private _quizService: QuizService, private _routeParams: RouteParams) {
    this.position = new Position();
  }


  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz() {
    let id = +this._routeParams.get('id');

    let data = this._quizService.getQuiz(id);
    this.questions = data;
    this.title = data.title;
    this.tagLine = data.tagLine;
    this.current = data.quiz.questions[0];
    this.total = data.quiz.questions.length;

    this.position.setMax(this.total);
    this.position.seek(Seek.Beginning);
  }

  getPlayerResponses(responses: Array<boolean>, question: IChoice[]): boolean[] {
    let ndx: number;
    let newResponses = question.map(() => false);

    for(ndx=0; ndx < responses.length; ndx += 1){
      if(!responses[ndx]){
        continue;
      }
      newResponses[ndx] = true;
    }
    return newResponses;
  }

  seekToQuestion(direction: Seek) {
    if (direction !== Seek.Beginning) {
      this.answers[this.position.getPosition()] = this.getPlayerResponses(this.responses, this.current.choices);
    }

    this.position.seek(direction);
    let pos = this.position.getPosition();
    this.current = this.questions.quiz.questions[pos];
    this.responses = (this.answers[pos]) ? this.answers[pos] : [];
    this.index = pos;
  }


  next = () => this.seekToQuestion(Seek.Forward);
}