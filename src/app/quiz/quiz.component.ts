import { Component, OnInit } from '@angular/core';
import { QuizactionService } from '../quizaction.service';
import { Quiz } from '../quiz';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
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

  onSaveClick() {
    this.quizservice.addQuiz(this.newQuiz).subscribe(
      (Response) => {
        var q: Quiz = new Quiz();
        q.quizID = Response.quizID;
        q.Noofquestions = Response.Noofquestions;
        q.questions = Response.questions;
        q.quizName = Response.quizName;
        this.quiz.push(q);
        this.newQuiz.quizID = null;
        this.newQuiz.Noofquestions = null;
        // this.newQuiz.questions = [];
        this.newQuiz.quizName = null;
      },
      (error) => console.log(error)
    );
  }

  onEditClick(event: any, index: number) {
    this.editQuiz.id = this.quiz[index].id;
    this.editQuiz.quizID = this.quiz[index].quizID;
    this.editQuiz.Noofquestions = this.quiz[index].Noofquestions;
    console.log(this.editQuiz.id);
    console.log(this.editQuiz);
    this.editQuiz.questions = this.quiz[index].questions;
    this.editQuiz.quizName = this.quiz[index].quizName;
  }

  onUpdateClick() {
    console.log(this.editQuiz.id);
    this.quizservice.uppdateQuiz(this.editQuiz, this.editQuiz.id).subscribe(
      (Response: Quiz) => {
        var q: Quiz = new Quiz();
        q.quizID = Response.quizID;
        q.Noofquestions = Response.Noofquestions;
        q.questions = Response.questions;
        q.quizName = Response.quizName;
        this.quiz[this.editIndex] = q;

        this.editQuiz.quizID = null;
        this.editQuiz.Noofquestions = null;
        // this.editQuiz.questions = [];
        this.editQuiz.quizName = null;
        this.getallquiz();
      },
      (error) => console.log(error)
    );
  }
  onDeleteClick(event: any, index: number) {
    this.deleteIndex = index;
    this.deleteQuiz.id = this.quiz[index].id;
    this.deleteQuiz.questions = this.quiz[index].questions;
    this.deleteQuiz.quizName = this.quiz[index].quizName;
    this.deleteQuiz.Noofquestions = this.quiz[index].Noofquestions;
  }

  onDeleteConfirmClick() {
    this.quizservice.deleteQuiz(this.deleteQuiz.id).subscribe(
      (Response) => {
        this.quiz.splice(this.deleteIndex, 1);
        this.deleteQuiz.quizID = null;
        this.deleteQuiz.quizName = null;
        // this.deleteQuiz.questions = [];
        this.deleteQuiz.Noofquestions = null;
      },
      (error) => {}
    );
  }

  getallquiz() {
    this.quizservice.getAllQuiz().subscribe((Response: Quiz[]) => {
      this.quiz = Response;
      console.log(this.quiz);
    });
  }
}
