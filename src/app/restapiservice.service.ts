import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiServices {
  url = 'http://localhost/webservice/rest/server.php';
  params = new HttpParams({
    fromObject: {
      wstoken: '0a027d4c25c6c8cfe631f2714a745a12',
      wsfunction: 'gradereport_user_get_grade_items',
      moodlewsrestformat: 'json',
      courseid: '4',
    },
  });
  header = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.post(this.url, this.params, this.header);
  }
}
