import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiServices {
  url = 'http://localhost/webservice/rest/server.php';

  constructor(private http: HttpClient) {}

  getRestApi() {
    return this.http.get(this.url);
  }
}
