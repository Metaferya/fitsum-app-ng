import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-courses';

  isActive = false;

  isSubscribed = true;

  email:string = 'nguser@gmail.com';

  registeredUsers = ['Fitsum', 'Mahider', 'Liyat', 'Naod'];

  subscribe() {

    console.log('Thanks for Subscribing');
  }

  notifyUpdates(subscribed:boolean) {

    if(subscribed) {

      console.log('You will be notified on new updates');

    } else {

      console.log('You need to subscribe to be notified');

    }

    
  }


}
