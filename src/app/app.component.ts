import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice-second';

  constructor(private http: HttpClient) {
    console.log('Inside App component\'s constructor');
    this.http.get('https://api.github.com/users/mike-north').subscribe((resp) => {
      console.log('Response 2 - ', resp);
    });
  }

  ngOnInit() {

  }
}
