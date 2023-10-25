import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizactionService } from '../quizaction.service';
import { Quiz } from '../quiz';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss'],
})
export class AddquestionComponent implements OnInit {
  public Editor: any = ClassicEditor;
  qTitle: string = '';
  showQuizBtn: boolean = false;
  questionarray: any[] = [];
  currentQuestion: number = 1;
  question1: string = '';
  option1: string = '';
  questiontoadd = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctoption: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private _question: QuizactionService,
    private router: Router
  ) {}
  Noofques: number = 0;
  qID: string = '';
  questions: any;
  quiz: any;

  ngOnInit(): void {
    this.qID = this._route.snapshot.params['quizID'];
    this._question.getQuiz(this.qID).subscribe((data: any) => {
      this.quiz = data;
      this.Noofques = this.quiz.Noofquestions;
      //   console.log(this.Noofques);
      //   console.log(this.quiz);
    });
  }
  addQuestion() {
    // const questiontoadd = {
    //   question1: 'what is m name',
    //   option1: '1',
    //   option2: '2',
    //   option3: '3',
    //   option4: '4',
    //   correctoption: '1',
    // };
    // this.quiz.questions.push(questiontoadd);
    console.log(this.questiontoadd);
    debugger;
    this.questionarray.push(this.questiontoadd);
    this.quiz.questions = this.questionarray;
    this.questiontoadd = {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correctoption: '',
    };
    console.log(this.questionarray);
    if (this.currentQuestion == this.Noofques) {
      this.showQuizBtn = true;
    }
    this.currentQuestion++;
  }
  saveQuiz() {
    this._question.uppdateQuiz(this.quiz, this.quiz.id).subscribe(
      (Response: Quiz) => {
        var q: Quiz = new Quiz();
        alert('quiz saved succesfully');
        this.router.navigate(['/quiz']); // q.quizID = Response.quizID;
        // q.Noofquestions = Response.Noofquestions;
        // q.questions = Response.questions;
        // q.quizName = Response.quizName;
        // this.quiz[this.editIndex] = q;

        // this.editQuiz.quizID = null;
        // this.editQuiz.Noofquestions = null;
        // // this.editQuiz.questions = [];
        // this.editQuiz.quizName = null;
        // this.getallquiz();
      },
      (error) => console.log(error)
    );
  }
}
