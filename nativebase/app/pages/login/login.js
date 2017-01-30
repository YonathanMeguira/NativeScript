"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var UID_Provider_1 = require("../../shared/UID.Provider");
var Login = (function () {
    function Login(router, UIDProvider) {
        this.router = router;
        this.UIDProvider = UIDProvider;
    }
    Login.prototype.ngOnInit = function () {
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
            _this.IsLoggedIn = false;
        });
    };
    Login.prototype.LoginFunc = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.Email,
            password: this.Password
        }).then(function (result) {
            _this.UIDProvider.UID = result.uid;
            _this.router.navigate(["List"]);
            _this.IsLoggedIn = true;
        }, function (errorMessage) {
            console.log(errorMessage);
            _this.IsLoggedIn = false;
        });
    };
    ;
    Login = __decorate([
        core_1.Component({
            selector: "Login",
            templateUrl: "pages/login/login.html",
            styleUrls: ['pages/login/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, UID_Provider_1.UIDProvider])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLElBQU8sUUFBUSxXQUFXLDhCQUE4QixDQUFDLENBQUM7QUFDMUQsNkJBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFTeEQ7SUFNSSxlQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUV6RSx3QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFBQSxpQkFxQkM7UUFwQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkIsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7YUFDRyxJQUFJLENBQ0wsVUFBQyxNQUFNO1lBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRW5DLENBQUMsRUFDRCxVQUFDLFlBQVk7WUFDVCxLQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFlBQVksRUFBRSxZQUFZO2FBQzdCLENBQUMsQ0FBQTtZQUNGLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsQ0FDQSxDQUFBO0lBQ1QsQ0FBQztJQUdELHlCQUFTLEdBQVQ7UUFBQSxpQkFnQkM7UUFmRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxNQUFNO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUNELFVBQUMsWUFBWTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUNBLENBQUE7SUFDVCxDQUFDOztJQTNETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O2FBQUE7SUF3REYsWUFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksYUFBSyxRQXFEakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgVUlEUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL1VJRC5Qcm92aWRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbG9naW4vc3R5bGUuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEVtYWlsO1xuICAgIFBhc3N3b3JkO1xuICAgIElzTG9nZ2VkSW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIFVJRFByb3ZpZGVyOiBVSURQcm92aWRlcikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5Jc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgfVxuXG4gICAgU2lnblVwKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkVtYWlsKVxuICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLkVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuSXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiTGlzdFwiXSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLklzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cblxuICAgIExvZ2luRnVuYygpIHtcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuRW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5QYXNzd29yZFxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuVUlEUHJvdmlkZXIuVUlEID0gcmVzdWx0LnVpZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJMaXN0XCJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLklzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuSXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH07XG59Il19