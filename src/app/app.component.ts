import { Component } from '@angular/core';

import { RestApiServices } from './restapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apicall: RestApiServices) {
    this.apicall.getRestApi().subscribe((data) => {
      console.log(data);
      alert(data);
      if (document.getElementById('data') != null) {
        document.getElementById('data').innerHTML = data;
      }
    });
  }
}
