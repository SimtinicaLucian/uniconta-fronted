"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalContentComponent = void 0;
var core_1 = require("@angular/core");
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(activeModal, alimService, token, userService, progressBar, alertService) {
        this.activeModal = activeModal;
        this.alimService = alimService;
        this.token = token;
        this.userService = userService;
        this.progressBar = progressBar;
        this.alertService = alertService;
        this.passEntry = new core_1.EventEmitter();
        this.form = {};
        this.isSuccessful = false;
        this.isaddFailed = false;
        this.errorMessage = '';
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        this.currentUser = this.token.getUser();
    };
    // register(f: NgForm) {
    //   this.alimService.add(f.value).subscribe(() => { })
    //   location.reload();
    // }
    ModalContentComponent.prototype.register = function (f) {
        var _this = this;
        this.alertService.info('Se verifica adaugarea facturii');
        this.progressBar.startLoading();
        this.alimService.add(f.value).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.progressBar.setSuccess();
                _this.progressBar.completeLoading();
                _this.isSuccessful = true;
                _this.isaddFailed = false;
                console.log("Succesful?: " + _this.isSuccessful);
                console.log("Failed?: " + _this.isaddFailed);
                _this.progressBar.completeLoading();
                // window.alert("You was successfully log-in!");
                // window.location.reload();
                location.reload();
            }
            else {
                _this.isSuccessful = false;
                _this.isaddFailed = true;
            }
        }, function (err) {
            _this.progressBar.setError();
            console.log(err);
            _this.alertService.danger(err.error.message);
            _this.progressBar.completeLoading();
            // this.errorMessage = err.error.message;
            _this.isaddFailed = true;
            console.log("Succesful?: " + _this.errorMessage);
            console.log("Failed?: " + _this.isaddFailed);
        });
    };
    __decorate([
        core_1.Input()
    ], ModalContentComponent.prototype, "user");
    __decorate([
        core_1.Output()
    ], ModalContentComponent.prototype, "passEntry");
    ModalContentComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-content',
            templateUrl: './modal-content.component.html',
            styleUrls: ['./modal-content.component.scss']
        })
    ], ModalContentComponent);
    return ModalContentComponent;
}());
exports.ModalContentComponent = ModalContentComponent;
