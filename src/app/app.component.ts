import { Component } from '@angular/core';

import { RestApiServices } from './restapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;
  constructor(private apicall: RestApiServices) {
    this.apicall.getAllCourses().subscribe((data) => {
      console.log(data);
      //data = data;
    });
  }
}
