import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quizContent = [
    {
      id: 1,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 4,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 5,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 6,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 8,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 9,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 10,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    }
  ];
  playerAnswers: {questionId: number; answer: string}[] = [];
  score = 0;
  isQuizFinished = false;

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
  }

  checkAnswers() {
    this.score = 0;
    for (let i = 0; i < this.playerAnswers.length; i++) {
      const question = this.quizContent.find((q) => q.id === this.playerAnswers[i].questionId);
      if (!question) continue;
      for (let j = 0; j < question.answers.length; j++) {
        const currentAnswer = question.answers[j];
        if (currentAnswer.correct && this.playerAnswers[i].answer === currentAnswer.answer) {
          this.score++;
          break;
        }
      }
    }
    this.isQuizFinished = true;
  }

  addAnswer(answer: string, questionId: number) {
    const isAnswered = this.playerAnswers.find((a) => a.questionId === questionId);
    if (isAnswered) {
      isAnswered.answer = answer;
      return;
    }
    this.playerAnswers.push({questionId, answer});
    console.log(this.playerAnswers);
  }

  isAnswerSelected(answer: string, id: number) {
    const isAnswered = this.playerAnswers.find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }
}
