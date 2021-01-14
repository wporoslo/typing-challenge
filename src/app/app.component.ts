import {Component} from '@angular/core'
import {lorem} from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Typing challange'
  challenge: string = lorem.sentence()
  successMsg: string = 'You won!'
  timer: number = 0

  onTyping(value: string): void {
    console.log(value)
  }
}
