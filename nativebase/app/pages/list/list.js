"use strict";
var core_1 = require("@angular/core");
var Firebase_services_1 = require("../Login/Firebase.services");
var List = (function () {
    function List(firebaseServices) {
        this.firebaseServices = firebaseServices;
        this.NewItem = "";
    }
    List.prototype.ngOnInit = function () {
        var x = this.firebaseServices.GetData();
        console.log("tasks =>", x);
    };
    List = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "pages/list/list.html",
            styleUrls: ['pages/list/style.css'],
            providers: [Firebase_services_1.FirebaseServices]
        }), 
        __metadata('design:paramtypes', [Firebase_services_1.FirebaseServices])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCxrQ0FBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQWE5RDtJQU9JLGNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTHRELFlBQU8sR0FBRyxFQUFFLENBQUM7SUFTYixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBMUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDaEMsQ0FBQzs7WUFBQTtJQXlCRixXQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxZQUFJLE9BcUJoQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2VzIH0gZnJvbSBcIi4uL0xvZ2luL0ZpcmViYXNlLnNlcnZpY2VzXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMaXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbGlzdC9zdHlsZS5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtGaXJlYmFzZVNlcnZpY2VzXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIE5ld0l0ZW0gPSBcIlwiO1xuXG4gICAgVG9Eb0xpc3Q6IEFycmF5PGFueT47XG5cbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlU2VydmljZXM6IEZpcmViYXNlU2VydmljZXMpIHtcbiAgICAgIFxuXG4gICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlcy5HZXREYXRhKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2tzID0+XCIsIHgpO1xuXG4gICAgfVxuXG4gICAgXG5cbn0iXX0=