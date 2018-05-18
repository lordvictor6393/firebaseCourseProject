import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDrf1esA4D4ni96BGacYKE0faK-skzwgdY",
      authDomain: "fir-test-d73c1.firebaseapp.com",
      databaseURL: "https://fir-test-d73c1.firebaseio.com",
      projectId: "fir-test-d73c1",
      storageBucket: "fir-test-d73c1.appspot.com",
      messagingSenderId: "644622904998"
    };
    initializeApp(config);

    var root = database().ref('messages/1');
    root.on('value', function(snap) {
      console.log(snap.val());
    });
  }
}
