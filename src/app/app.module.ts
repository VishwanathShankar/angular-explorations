import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, DoBootstrap } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';

import { AppComponent } from './app.component';

//Create a custom event

const event1 = new CustomEvent('build-with-data', {detail: { 'name': 'vishwa'} });

//Fire the custom event after x seconds
//This is to emulate the SMART on FHIR token call

setTimeout(() => { 
  document.dispatchEvent(event1);
},6000);



/*
export function initApp(http: HttpClient) {
  return () => {
    return http.get('https://api.github.com/users/VishwanathShankar')
      .toPromise()
      .then((resp) => {
        console.log('Response 1 - ', resp);
      });
  };
}
*/


/*
  export function initApp(http: HttpClient) {
    return () => {
      return new Promise((resolve) => {
             setTimeout(() => {
               console.log('In initApp');
               document.dispatchEvent(event);
               resolve("testData");
             }, 5000);
           });
    };
  }

*/

document.addEventListener('build-with-data', function(e) {
  console.log("Custom event build-with-data caught");
  console.log(e);
});

 export function initApp() {
  return () => {
      return new Promise((resolve,reject) => {
         document.addEventListener('patientDetailsEvent', function(e) {
            console.log("Custom event patientDetailsEvent caught");
            console.log(e);
            resolve("testData");
          //reject("testData");
        });
        

/*
             setTimeout(() => {
               console.log('In initApp');
               document.addEventListener('build', function() {
                console.log("Custom event caught");
                //resolve("testData");
                reject("testData");
              });
             }, 5000);

             */

            
            });
          };
    }

  /*
  var getinitAppResults = initApp();
  getinitAppResults.then(promiseData => {
    console.log("In the then method of getinitAppResults");
    console.log(promiseData);
  })
  .catch(rejectedData => {
    console.log("In the then method of getinitAppResults");
    console.log(rejectedData);
  })
*/
  /*
export function initApp(http: HttpClient) {
  return () => {
    return http.get('/assets/en.json')
      .toPromise()
      .then((resp) => {
        console.log('Response 1 - ', resp);
      });
  };
}
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    multi: true,
    deps: [HttpClient]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
