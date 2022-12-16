import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  postBlog(blog: any) {
    let url = "http://localhost/webservice/rest/server.php";
    return this.http.post(url, blog, this.httpOptions);
  }