import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getMessaging, getToken } from 'firebase/messaging';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'push-notifications';
  ngOnInit(): void {
    this.requestPermission();
  }
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, {vapidKey: environment.firebaseConfig.vapidKey})
    .then((currentToken)=>{
      if(currentToken){
        console.log('Token Received : ', currentToken);
      }else{
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch(error => console.log(error));
  }
  
}