import { Component } from '@angular/core';
import { QuizService } from "../shared/services/quiz.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quizContent = this.quizService.quizContent;
  isQuizFinished = this.quizService.isQuizFinished;
  score = this.quizService.score;

  constructor(private quizService: QuizService) {}

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
  }

  checkAnswers() {
    this.quizService.checkAnswers();
    this.score = this.quizService.score;
    this.isQuizFinished = this.quizService.isQuizFinished;
  }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }

  isAnswerSelected(answer: string, id: number) {
    const isAnswered = this.quizService.playerAnswers.find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }
}
