import { Component } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  quizContent: any[] = this.quizService.quizContent;
  isQuizFinished = this.quizService.isQuizFinished;

  constructor(private quizService: QuizService) {
    this.quizService.getQuizContent();
  }

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
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
