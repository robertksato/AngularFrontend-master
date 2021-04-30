import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:8080';
  qns!: any[];
  seconds!: number;
  timer: any;
  qnProgress!: number;
  correctAnswerCount: number = 0;

  //---------------- Helper Methods---------------
  constructor(public http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant')!);
    return participant.Name;
  }


  //---------------- Http Methods---------------

  addParticipant(name: string, email: string) {
    var body = {
      "name": name,
      "email": email
    }
    return this.http.post(this.rootUrl + '/participant/add', body);
  }

  getQuestions() {
    return this.http.get(this.rootUrl + '/Questions');
  }

   getAnswers() {
    var body = this.qns.map(x => x.QnID);
    return this.http.post(this.rootUrl + '/Answers', body);
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant')!);
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/UpdateOutput", body);
  }

}
