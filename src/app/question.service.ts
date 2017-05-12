import { Injectable } from '@angular/core';
import { Question } from './question';
import { QUESTIONS } from './questions';
@Injectable()
export class QuestionService {
  getQuestions(): Promise<Question[]> {
    return Promise.resolve(QUESTIONS);
  }
}