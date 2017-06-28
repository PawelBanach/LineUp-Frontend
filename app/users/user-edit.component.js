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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../_services/user.service");
var router_1 = require("@angular/router");
var alert_service_1 = require("../_services/alert.service");
var UserEditComponent = (function () {
    function UserEditComponent(userService, router, alertService) {
        this.userService = userService;
        this.router = router;
        this.alertService = alertService;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDepartments();
        this.loadFieldOfStudies();
        this.loadTechnologies();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getById(currentUser.id).subscribe(function (user) { _this.model = user; debugger; });
    };
    UserEditComponent.prototype.update = function () {
        var _this = this;
        this.userService.update(this.model).subscribe(function (data) {
            debugger;
            _this.router.navigate(['/']);
            _this.alertService.success('User updated successfully', true);
        }, function (error) {
            debugger;
            _this.alertService.error(error);
        });
    };
    UserEditComponent.prototype.loadDepartments = function () {
        var _this = this;
        this.userService.loadDepartments().subscribe(function (departments) { return _this.departments = departments; });
    };
    UserEditComponent.prototype.loadFieldOfStudies = function () {
        var _this = this;
        this.userService.loadFieldOfStudies().subscribe(function (studies) { return _this.fieldOfStudies = studies; });
    };
    UserEditComponent.prototype.loadTechnologies = function () {
        var _this = this;
        this.userService.loadTechnologies().subscribe(function (technologies) { return _this.techs = technologies; });
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user-edit.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, alert_service_1.AlertService])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map