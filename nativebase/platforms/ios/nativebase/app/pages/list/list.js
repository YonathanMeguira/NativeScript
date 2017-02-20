"use strict";
var core_1 = require("@angular/core");
var Firebase_services_1 = require("../Login/Firebase.services");
var List = (function () {
    function List(firebaseServices) {
        this.firebaseServices = firebaseServices;
        this.ToDoList = [];
    }
    List.prototype.ngOnInit = function () {
        console.log("inside list controller");
    };
    List.prototype.Get = function () {
        this.ToDoList.push(this.firebaseServices.task);
        console.log(this.ToDoList);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCxrQ0FBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQWE5RDtJQU1JLGNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSi9DLGFBQVEsR0FBZSxFQUFFLENBQUM7SUFNakMsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUVELGtCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQTNCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQ2hDLENBQUM7O1lBQUE7SUF5QkYsV0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksWUFBSSxPQXFCaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlcyB9IGZyb20gXCIuLi9Mb2dpbi9GaXJlYmFzZS5zZXJ2aWNlc1wiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2xpc3Qvc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlc11cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgTGlzdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgVG9Eb0xpc3Q6IEFycmF5PGFueT4gPSBbXTtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlU2VydmljZXM6IEZpcmViYXNlU2VydmljZXMpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBsaXN0IGNvbnRyb2xsZXJcIik7XG5cbiAgICB9XG5cbiAgICBHZXQoKSB7XG4gICAgICAgIHRoaXMuVG9Eb0xpc3QucHVzaCh0aGlzLmZpcmViYXNlU2VydmljZXMudGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuVG9Eb0xpc3QpXG4gICAgfVxuICAgIFxuXG59Il19