"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var question_1 = require("./question");
var answers_1 = require("./answers");
var questions_1 = require("./questions");
var QandAComponent = (function () {
    function QandAComponent() {
        this.result = 0;
    }
    QandAComponent.prototype.chooseAnswer = function (questionId, answerId) {
        console.log(questionId);
        console.log(answerId);
        answers_1.ANSWERS[questionId] = answerId;
        console.log(answers_1.ANSWERS);
    };
    QandAComponent.prototype.checkall = function () {
        var kol = 0;
        for (var _i = 0, QUESTIONS_1 = questions_1.QUESTIONS; _i < QUESTIONS_1.length; _i++) {
            var num = QUESTIONS_1[_i];
            if (num.solution === num.chosed)
                kol++;
        }
        this.result = kol;
    };
    return QandAComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_1.Question)
], QandAComponent.prototype, "question", void 0);
QandAComponent = __decorate([
    core_1.Component({
        selector: 'qanda',
        template: "\n\t<div class=\"card\" *ngIf=\"question\">\n\t\t<div class=\"inside\">\n\t\t\t<h2>{{question.text}} </h2>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let option of question.options\">\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"radio\"  (click)=\"chooseAnswer(question.id, option.id); question.chosed = option.id\" \n\t\t\t\t\tclass=\"option-input radio\" [checked]=\"question.chosed===option.id\" name=\"example\" />\n\t\t\t\t\t{{option.text}} \n\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t<div class=\"showresult\">\n\t\t\t<div>\n\t\t\t<input type=\"submit\" class=\"buttonthis\" value=\"Results\" (click)=\"checkall()\">\n\t\t\t<div class=\"result\" *ngIf=\"result!=0\">\n\t\t\t{{result}} correct\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ",
    })
], QandAComponent);
exports.QandAComponent = QandAComponent;
//# sourceMappingURL=qanda.component.js.map