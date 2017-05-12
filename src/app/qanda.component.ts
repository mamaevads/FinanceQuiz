import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Question } from './question';
import { Option } from './option';
import { ANSWERS } from './answers';
import { QUESTIONS } from './questions';

@Component({
  selector: 'qanda',
  template: `
	<div class="card" *ngIf="question">
		<div class="inside">
			<h2>{{question.text}} </h2>
			<ul>
				<li *ngFor="let option of question.options">
				<label>
					<input type="radio"  (click)="chooseAnswer(question.id, option.id); question.chosed = option.id" 
					class="option-input radio" [checked]="question.chosed===option.id" name="example" />
					{{option.text}} 
				</label>
				</li>
			</ul>
		<div class="showresult">
			<div>
			<input type="submit" class="buttonthis" value="Results" (click)="checkall()">
			<div class="result" *ngIf="result!=0">
			{{result}} correct
			</div>
		</div>
	</div>
  `,
})
export class QandAComponent {
	@Input() question: Question;
	chooseAnswer(questionId:number, answerId:string) {
		console.log(questionId);
		console.log(answerId);
    ANSWERS[questionId] = answerId;
		console.log(ANSWERS);
  }
	result: number = 0;
	checkall(){
		var kol=0;
		for (let num of QUESTIONS) {
			if (num.solution===num.chosed) kol++;
		}
		this.result = kol;
		
	}
}