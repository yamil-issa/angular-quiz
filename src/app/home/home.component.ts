import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  playerName = '';

  constructor(private router: Router) { }

  get isPlayerNameFill() {
    return this.playerName.length < 1;
  }

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.playerName]);
  }
}
