
import {Component, OnInit} from '@angular/core';
import {QuizService} from './quiz-service';

@Component({
  selector: 'quiz',
  templateUrl: './templates/quiz.html'
})
export class QuizComponent implements OnInit {
  quizList = [];

  constructor(private _quizService:QuizService){
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    this.quizList = this._quizService.getQuizzes(); // .getQuizzes();
  }
}

