import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizactionService } from '../quizaction.service';
import { Router } from '@angular/router';
import { Quiz } from '../quiz';
@Component({
  selector: 'app-viewavailablequiz',
  templateUrl: './viewavailablequiz.component.html',
  styleUrls: ['./viewavailablequiz.component.scss'],
})
export class ViewavailablequizComponent {
  quiz: Quiz[] = [];
  newQuiz: Quiz = new Quiz();
  editQuiz: Quiz = new Quiz();
  editIndex: any = null;
  deleteQuiz: Quiz = new Quiz();
  deleteIndex: any = null;

  constructor(private quizservice: QuizactionService) {}
  ngOnInit(): void {
    this.getallquiz();
    console.log(this.quiz);
  }

  getallquiz() {
    this.quizservice.getAllQuiz().subscribe((Response: Quiz[]) => {
      this.quiz = Response;
      console.log(this.quiz);
    });
  }
}
