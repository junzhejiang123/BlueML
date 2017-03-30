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
var core_1 = require('@angular/core');
var formData_model_1 = require('../data/formData.model');
var formData_service_1 = require('../data/formData.service');
var analysisComponent = (function () {
    function analysisComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Please select algorithm parameters';
    }
    analysisComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getData();
        console.log('Analysis feature loaded!');
    };
    analysisComponent.prototype.ngOnDestroy = function () {
        this.formDataService.setData(this.formData);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', formData_model_1.FormData)
    ], analysisComponent.prototype, "formData", void 0);
    analysisComponent = __decorate([
        core_1.Component({
            selector: 'mt-wizard-analysis',
            templateUrl: '/app/analysis/analysis.component.html'
        }), 
        __metadata('design:paramtypes', [formData_service_1.FormDataService])
    ], analysisComponent);
    return analysisComponent;
}());
exports.analysisComponent = analysisComponent;
//# sourceMappingURL=analysis.component.js.map