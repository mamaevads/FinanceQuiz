import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question';
import { QandAComponent } from './qanda.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="header">
      <h1>{{title}}</h1>
    </div>
    <div class="info">
      <div class="loq">
        <ul class="questions" >
          <li *ngFor="let question of questions"
            [class.selected]="question === selectedQuestion"
            (click)="onSelect(question)">
            <span >Question {{question.id}}</span> 
          </li>
        </ul>
      </div>
      <qanda [question]="selectedQuestion"></qanda>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .loq{
      display: block;
      float: left;
    }
    .questions {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .questions li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .questions li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .questions li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .questions .text {
      position: center;
      margin: 0 auto;
      top: -3px;
      font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif; 

    }
    .questions .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  title = 'FinanceQuiz';
  questions: Question[];
  selectedQuestion: Question;

  constructor(private questionService: QuestionService) { }
  getQuestions(): void {
    this.questionService.getQuestions().then(questions => this.questions =  questions);
  }
  ngOnInit(): void {
    this.getQuestions();
  }
  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }
}