import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice-second';
  sessionStorageobject: any;
  options: any;

  constructor(private http: HttpClient) {
    console.log('Inside App component\'s constructor');
    this.sessionStorageobject = JSON.parse(sessionStorage.getItem('tokenResponse'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'patientId': '123',
        'encounterId': '456',
        'tenantId': '789'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.sessionStorageobject.access_token);
    httpOptions.headers = httpOptions.headers.set('patientId', this.sessionStorageobject.patient);
    httpOptions.headers = httpOptions.headers.set('encounterId', this.sessionStorageobject.encounter);
    httpOptions.headers = httpOptions.headers.set('encounterId', this.sessionStorageobject.tenant);
    this.options = { headers: httpOptions.headers };
    this.http.get('https://api.github.com/users/mike-north', this.options).subscribe((resp) => {
      console.log('Response 2 - ', resp);
    });
  }

  ngOnInit() {

  }
}
