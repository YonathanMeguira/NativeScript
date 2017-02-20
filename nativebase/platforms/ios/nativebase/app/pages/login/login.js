"use strict";
var core_1 = require("@angular/core");
var Firebase_services_1 = require("./Firebase.services");
var Login = (function () {
    function Login(firebaseServices) {
        this.firebaseServices = firebaseServices;
    }
    ;
    Login.prototype.ngOnInit = function () {
        this.IsLoggedIn = false;
        this.Email = "johnmeguira@gmail.com";
        this.Password = "Jm140890";
    };
    ;
    Login.prototype.Login = function () {
        this.firebaseServices.Login(this.Email, this.Password);
    };
    Login.prototype.Signup = function () {
        return this.firebaseServices.SignUp(this.Email, this.Password);
    };
    ;
    Login = __decorate([
        core_1.Component({
            selector: "Login",
            templateUrl: "pages/login/login.html",
            styleUrls: ['pages/login/style.css'],
            providers: [Firebase_services_1.FirebaseServices]
        }), 
        __metadata('design:paramtypes', [Firebase_services_1.FirebaseServices])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBV3ZEO0lBTUksZUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDOztJQUUzRCx3QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOztJQUVELHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7SUEzQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNoQyxDQUFDOzthQUFBO0lBd0JGLFlBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGFBQUssUUFxQmpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2VzIH0gZnJvbSBcIi4vRmlyZWJhc2Uuc2VydmljZXNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbG9naW4vc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlc11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgRW1haWw7XG4gICAgcHJpdmF0ZSBQYXNzd29yZDtcbiAgICBJc0xvZ2dlZEluOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2VzOiBGaXJlYmFzZVNlcnZpY2VzKSB7IH07XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5Jc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMuRW1haWwgPSBcImpvaG5tZWd1aXJhQGdtYWlsLmNvbVwiO1xuICAgICAgICB0aGlzLlBhc3N3b3JkID0gXCJKbTE0MDg5MFwiO1xuICAgIH07XG5cbiAgICBMb2dpbigpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2VzLkxvZ2luKHRoaXMuRW1haWwsIHRoaXMuUGFzc3dvcmQpXG4gICAgfVxuICAgIFNpZ251cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VTZXJ2aWNlcy5TaWduVXAodGhpcy5FbWFpbCwgdGhpcy5QYXNzd29yZCk7XG4gICAgfTtcblxufSJdfQ==