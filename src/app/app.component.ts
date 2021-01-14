import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Typing challange'
  challenge: string = 'Lorem ipsum dolor amet'
  successMsg: string = 'You won!'
}
