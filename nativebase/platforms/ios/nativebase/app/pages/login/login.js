"use strict";
var core_1 = require("@angular/core");
var Firebase_services_1 = require("./Firebase.services");
var UID_Provider_1 = require("../../shared/UID.Provider");
var Login = (function () {
    function Login(firebaseServices) {
        this.firebaseServices = firebaseServices;
    }
    ;
    Login.prototype.ngOnInit = function () {
        this.IsLoggedIn = false;
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
            providers: [Firebase_services_1.FirebaseServices, UID_Provider_1.UIDProvider]
        }), 
        __metadata('design:paramtypes', [Firebase_services_1.FirebaseServices])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3ZELDZCQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBV3hEO0lBTUksZUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDOztJQUUzRCx3QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBQ0Qsc0JBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O0lBekJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsMEJBQVcsQ0FBQztTQUM3QyxDQUFDOzthQUFBO0lBc0JGLFlBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGFBQUssUUFtQmpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2VzIH0gZnJvbSBcIi4vRmlyZWJhc2Uuc2VydmljZXNcIjtcbmltcG9ydCB7IFVJRFByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9VSUQuUHJvdmlkZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbG9naW4vc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlcywgVUlEUHJvdmlkZXJdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIEVtYWlsO1xuICAgIHByaXZhdGUgUGFzc3dvcmQ7XG4gICAgSXNMb2dnZWRJbjogQm9vbGVhbjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlU2VydmljZXM6IEZpcmViYXNlU2VydmljZXMpIHsgfTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLklzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgTG9naW4oKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlcy5Mb2dpbih0aGlzLkVtYWlsLCB0aGlzLlBhc3N3b3JkKVxuICAgIH1cbiAgICBTaWdudXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlU2VydmljZXMuU2lnblVwKHRoaXMuRW1haWwsIHRoaXMuUGFzc3dvcmQpO1xuICAgIH07XG5cbn0iXX0=