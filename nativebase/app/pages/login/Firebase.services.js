"use strict";
var core_1 = require('@angular/core');
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var FirebaseServices = (function () {
    function FirebaseServices(router) {
        this.router = router;
    }
    FirebaseServices.prototype.Login = function (Email, Password) {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: Email,
            password: Password
        })
            .then(function (res) {
            console.log("json version " + res.uid);
            _this.FirebaseUrl = "users/" + res.uid;
            _this.GetData();
            _this.router.navigate(["List"]);
        }, function (error) {
            alert("this account is not recognized...");
        });
    };
    ;
    FirebaseServices.prototype.GetData = function () {
        console.log("retrieving data from " + this.FirebaseUrl);
        var onQueryEvent = function (result) {
            if (!result.error) {
                var tasks = result.value.task;
                console.log(tasks);
            }
            else {
                console.log("an error occured");
            }
        };
        firebase.query(onQueryEvent, this.FirebaseUrl, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.KEY
            }
        });
    };
    FirebaseServices.prototype.SignUp = function (Email, Password) {
        firebase.createUser({
            email: Email,
            password: Password
        });
    };
    FirebaseServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FirebaseServices);
    return FirebaseServices;
}());
exports.FirebaseServices = FirebaseServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2Uuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLElBQU8sUUFBUSxXQUFXLDhCQUE4QixDQUFDLENBQUM7QUFDMUQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSS9CO0lBS0ksMEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRWxDLENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVE7UUFBckIsaUJBaUJDO1FBZkcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFHVixDQUFDOztJQUVELGtDQUFPLEdBQVA7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLFlBQVksR0FBRyxVQUFDLE1BQU07WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUNuQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsUUFBUSxDQUFDLEtBQUssQ0FDVixZQUFZLEVBQ1osSUFBSSxDQUFDLFdBQVcsRUFDaEI7WUFDSSxXQUFXLEVBQUUsSUFBSTtZQUNqQixPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO2FBQ3RDO1NBQ0osQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxLQUFLLEVBQUUsUUFBUTtRQUNsQixRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQTNETDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBNkRiLHVCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSx3QkFBZ0IsbUJBMkQ1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2VzIHtcblxuXG5cbiAgICBwdWJsaWMgRmlyZWJhc2VVcmw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBMb2dpbihFbWFpbCwgUGFzc3dvcmQpIHtcblxuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBlbWFpbDogRW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogUGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJqc29uIHZlcnNpb24gXCIgKyByZXMudWlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLkZpcmViYXNlVXJsID0gXCJ1c2Vycy9cIiArIHJlcy51aWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5HZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiTGlzdFwiXSk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJ0aGlzIGFjY291bnQgaXMgbm90IHJlY29nbml6ZWQuLi5cIik7XG4gICAgICAgICAgICB9KVxuXG5cbiAgICB9O1xuXG4gICAgR2V0RGF0YSgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHJpZXZpbmcgZGF0YSBmcm9tIFwiICsgdGhpcy5GaXJlYmFzZVVybCk7XG4gICAgICAgIHZhciBvblF1ZXJ5RXZlbnQgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHJlc3VsdC52YWx1ZS50YXNrO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbiBlcnJvciBvY2N1cmVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlyZWJhc2UucXVlcnkoXG4gICAgICAgICAgICBvblF1ZXJ5RXZlbnQsXG4gICAgICAgICAgICB0aGlzLkZpcmViYXNlVXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpbmdsZUV2ZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlPcmRlckJ5VHlwZS5LRVlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBTaWduVXAoRW1haWwsIFBhc3N3b3JkKSB7XG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgZW1haWw6IEVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFBhc3N3b3JkXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn0iXX0=