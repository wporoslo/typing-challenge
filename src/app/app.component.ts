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
  intervalId: NodeJS.Timeout

  //timer may need some additional work to accurately represent time

  updateTimer = (): void => {
    this.timer = this.timer + 1
  }

  startTimer(): void {
    if (!this.userInput) {
      clearInterval(this.intervalId)
      this.timer = 0
      return
    }
    if (this.timer > 0) {
      return
    }
    this.intervalId = setInterval(this.updateTimer, 100)
  }

  onInput(value: string): void {
    this.userInput = value
    this.startTimer()
  }

  evaluateInput(letter: string, userInput: string): string {
    if (!userInput) {
      return 'pending'
    }
    return letter === userInput ? 'success' : 'error'
  }

  getTime(): number {
    clearInterval(this.intervalId)
    return this.timer / 10
  }

  getNewChallenge(): void {
    this.userInput = ''
    this.challenge = lorem.sentence()
  }
}
