import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiServices {
  url = 'http://localhost/webservice/rest/server.php';
  params = JSON.stringify({
    wstoken: '0a027d4c25c6c8cfe631f2714a745a12',
    wsfunction: 'gradereport_user_get_grade_items',
    moodlewsrestformat: 'json',
    courseid: '4',
  });
  header = {
    'Content-Type': 'application/json',
    Host: 'localhost',
    'Content-Length': '406',
  };
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.post(this.url, this.params, { headers: this.header });
  }
}
