export class Quiz {
  id: any;
  question: any;
  quizID: any;
  quizName: any;
  Noofquestions: any;
  questions: any[] = [];
}

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  correctanswer: string;
}
