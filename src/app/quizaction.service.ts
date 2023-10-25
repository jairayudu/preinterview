import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class QuizactionService {
  constructor(private httpclient: HttpClient) {}

  public getAllQuiz(): Observable<Quiz[]> {
    return this.httpclient.get<Quiz[]>(`${baseUrl}/quiz`);
  }

  public getQuiz(quizID: any): Observable<Quiz> {
    return this.httpclient.get<Quiz>('http://localhost:3000/quiz/' + quizID);
  }

  public addQuiz(newQuiz: Quiz): Observable<Quiz> {
    return this.httpclient.post<Quiz>(`${baseUrl}/quiz/`, newQuiz);
  }

  public uppdateQuiz(existingQuiz: Quiz, id: number): Observable<Quiz> {
    return this.httpclient.put<Quiz>(`${baseUrl}/quiz/${id}`, existingQuiz);
  }

  public deleteQuiz(quizID: number): Observable<number> {
    return this.httpclient.delete<number>(`${baseUrl}/quiz/` + quizID);
  }

  getQuestionJson() {
    return this.httpclient.get<any>(`${baseUrl}/quiz/questions`);
  }
}
