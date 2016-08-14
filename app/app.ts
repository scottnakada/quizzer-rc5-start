
import {Component} from '@angular/core';
import {QuizService} from './quiz-service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './templates/hello.html',
  providers: [QuizService]
})
export class AppComponent implements OnInit  {
  public name:string = "<your name>";
  quizzes: IQuizList[];

  constructor(private _quizService: QuizService) {
  }

  ngOnInit() {
    this.getQuizzes();
  }

  getQuizzes(){
    // this.quizzes = this._quizService.getQuizzes();
  }

  clickHandler(event){
    console.info('The button was clicked.');
  }
}

