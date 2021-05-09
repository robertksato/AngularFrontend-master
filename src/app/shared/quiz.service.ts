import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:8080';

  //---------------- Helper Methods---------------
  constructor(public http: HttpClient) { }


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
    return this.http.get(this.rootUrl + '/question/all');
  }

}
