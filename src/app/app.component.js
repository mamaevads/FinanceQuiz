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
var question_service_1 = require("./question.service");
var AppComponent = (function () {
    function AppComponent(questionService) {
        this.questionService = questionService;
        this.title = 'FinanceQuiz';
    }
    AppComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getQuestions().then(function (questions) { return _this.questions = questions; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    AppComponent.prototype.onSelect = function (question) {
        this.selectedQuestion = question;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"header\">\n      <h1>{{title}}</h1>\n    </div>\n    <div class=\"info\">\n      <div class=\"loq\">\n        <ul class=\"questions\" >\n          <li *ngFor=\"let question of questions\"\n            [class.selected]=\"question === selectedQuestion\"\n            (click)=\"onSelect(question)\">\n            <span >Question {{question.id}}</span> \n          </li>\n        </ul>\n      </div>\n      <qanda [question]=\"selectedQuestion\"></qanda>\n    </div>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .loq{\n      display: block;\n      float: left;\n    }\n    .questions {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .questions li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .questions li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .questions li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .questions .text {\n      position: center;\n      margin: 0 auto;\n      top: -3px;\n      font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif; \n\n    }\n    .questions .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
        providers: [question_service_1.QuestionService]
    }),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map