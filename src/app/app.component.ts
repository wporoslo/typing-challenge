import {Component} from '@angular/core'
import {lorem} from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  challenge: string = lorem.sentence()
  timer: number = 0
  userInput: string = ''

  onTyping(value: string): void {
    this.userInput = value
  }
}
