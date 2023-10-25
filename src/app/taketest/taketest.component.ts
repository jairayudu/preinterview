import { ActivatedRoute } from '@angular/router';
import { QuizactionService } from '../quizaction.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.scss'],
})
export class TaketestComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _question: QuizactionService,
    private router: Router
  ) {}
  qID: string = '';
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  selectedOptions: any = [];
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  correctQuestions: number = 0;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  isOptionSelected: boolean = false;
  ngOnInit(): void {
    this.qID = this._route.snapshot.params['id'];
    this._question.getQuiz(this.qID).subscribe((data: any) => {
      this.questionList = data.questions;
    });
  }

  // getAllQuestions() {
  //   this._question.getQuestionJson().subscribe((res) => {
  //     this.questionList = res.questions;
  //   });
  // }

  nextQuestion() {
    if (!this.isOptionSelected) {
      alert('Please select any option');

      return;
    }

    this.currentQuestion++;
    this.isOptionSelected = false;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  selectedOption(selectedOption: any) {
    this.isOptionSelected =
      selectedOption != undefined || null || '' ? true : false;
    this.selectedOptions[this.currentQuestion] = selectedOption;
  }
  submit() {
    if (!this.isOptionSelected) {
      alert('Please select any option');
      return;
    }
    for (let i = 0; i < this.selectedOptions.length; i++) {
      if (this.questionList[i].correctoption == this.selectedOptions[i]) {
        this.correctQuestions++;
      }
    }
    console.log(this.correctQuestions, this.selectedOptions, this.questionList);
    this.isQuizCompleted = true;
  }
  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    // this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }
  getProgressPercent() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }
}
