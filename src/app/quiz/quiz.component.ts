import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  title = "Please answer the following quiz questions";
  questions;

  constructor(private router: Router, public quizService: QuizService) {
  this.questions = quizService.getQuestions();
  }

}
