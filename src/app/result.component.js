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
var QandAComponent = (function () {
    function QandAComponent() {
    }
    return QandAComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], QandAComponent.prototype, "result", void 0);
QandAComponent = __decorate([
    core_1.Component({
        selector: 'result',
        template: "\n\t<div class=\"card\" *ngIf=\"question\">\n\t\t<div class=\"inside\">\n\t\t\t<h2>{{question.text}} </h2>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let option of question.options\">\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"radio\"   (click)=\"chooseAnswer(question.id, option.id); question.chosed = option.id\" \n\t\t\t\t\tclass=\"option-input radio\" [checked]=\"question.chosed===option.id\" name=\"example\" />\n\t\t\t\t\t{{option.text}} \n\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t<div>\n\t\t<input type=\"submit\" class=\"buttonthis\" value=\"Results\" (click)=\"checkall()\">\n\t</div>\n  ",
    })
], QandAComponent);
exports.QandAComponent = QandAComponent;
//# sourceMappingURL=result.component.js.map