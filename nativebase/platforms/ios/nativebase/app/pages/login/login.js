"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var Login = (function () {
    function Login(router) {
        this.router = router;
    }
    Login.prototype.ngOnInit = function () {
        console.log("inside login screen");
        this.IsLoggedIn = false;
    };
    Login.prototype.SignUp = function () {
        var _this = this;
        console.log(this.Email);
        firebase.createUser({
            email: this.Email,
            password: this.Password
        })
            .then(function (result) {
            _this.IsLoggedIn = true;
            _this.router.navigate(["List"]);
        }, function (errorMessage) {
            alert({
                title: "No user created",
                message: errorMessage,
                okButtonText: "OK, got it"
            });
        });
    };
    Login.prototype.AlertMe = function () {
        alert(this.Email + " : " + this.Password);
    };
    Login = __decorate([
        core_1.Component({
            selector: "Login",
            templateUrl: "pages/login/login.html",
            styleUrls: ['pages/login/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLElBQU8sUUFBUSxXQUFXLDhCQUE4QixDQUFDLENBQUM7QUFTMUQ7SUFTSSxlQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkMsd0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtJQUMzQixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUFBLGlCQW9CQztRQW5CRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN2QixRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQzthQUNHLElBQUksQ0FDTCxVQUFDLE1BQU07WUFDSCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbkMsQ0FBQyxFQUNELFVBQUMsWUFBWTtZQUNULEtBQUssQ0FBQztnQkFDRixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7YUFDN0IsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQTlDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O2FBQUE7SUE0Q0YsWUFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksYUFBSyxRQTBDakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWydwYWdlcy9sb2dpbi9zdHlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcblxuXG5cbiAgICBFbWFpbDtcbiAgICBQYXNzd29yZDtcbiAgICBJc0xvZ2dlZEluO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBsb2dpbiBzY3JlZW5cIilcbiAgICAgICAgdGhpcy5Jc0xvZ2dlZEluID0gZmFsc2VcbiAgICB9XG5cbiAgICBTaWduVXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuRW1haWwpXG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgZW1haWw6IHRoaXMuRW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5QYXNzd29yZFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Jc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJMaXN0XCJdKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vIHVzZXIgY3JlYXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBBbGVydE1lKCkge1xuICAgICAgICBhbGVydCh0aGlzLkVtYWlsICsgXCIgOiBcIiArIHRoaXMuUGFzc3dvcmQpXG4gICAgfVxuXG59Il19