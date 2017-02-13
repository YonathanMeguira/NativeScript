"use strict";
var core_1 = require("@angular/core");
var UID_Provider_1 = require("../../shared/UID.Provider");
var Firebase_services_1 = require("../Login/Firebase.services");
require("rxjs/add/operator/map");
var List = (function () {
    function List(firebaseServices, UIDProvider) {
        this.firebaseServices = firebaseServices;
        this.UIDProvider = UIDProvider;
        this.NewItem = "";
    }
    List.prototype.ngOnInit = function () {
        var _this = this;
        this.UIDProvider.GetUID().subscribe(function (res) {
            _this.firebaseServices.GetData(res);
            console.log("coucou you should see some data right about now");
            _this.ToDoList.push(res);
        });
    };
    List = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "pages/list/list.html",
            styleUrls: ['pages/list/style.css'],
            providers: [Firebase_services_1.FirebaseServices, UID_Provider_1.UIDProvider]
        }), 
        __metadata('design:paramtypes', [Firebase_services_1.FirebaseServices, UID_Provider_1.UIDProvider])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCw2QkFBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUV4RCxrQ0FBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQUU5RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFZL0I7SUFNSSxjQUFvQixnQkFBa0MsRUFBVSxXQUF3QjtRQUFwRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKeEYsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUkrRSxDQUFDO0lBRTdGLHVCQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUN0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQTtZQUM5RCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSwwQkFBVyxDQUFDO1NBQzdDLENBQUM7O1lBQUE7SUFvQkYsV0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksWUFBSSxPQWdCaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVUlEUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL1VJRC5Qcm92aWRlclwiO1xuXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2VzIH0gZnJvbSBcIi4uL0xvZ2luL0ZpcmViYXNlLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxpc3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWydwYWdlcy9saXN0L3N0eWxlLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0ZpcmViYXNlU2VydmljZXMsIFVJRFByb3ZpZGVyXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIE5ld0l0ZW0gPSBcIlwiO1xuXG4gICAgVG9Eb0xpc3Q6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlU2VydmljZXM6IEZpcmViYXNlU2VydmljZXMsIHByaXZhdGUgVUlEUHJvdmlkZXI6IFVJRFByb3ZpZGVyKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy5VSURQcm92aWRlci5HZXRVSUQoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZXMuR2V0RGF0YShyZXMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWNvdSB5b3Ugc2hvdWxkIHNlZSBzb21lIGRhdGEgcmlnaHQgYWJvdXQgbm93XCIpXG4gICAgICAgICAgICB0aGlzLlRvRG9MaXN0LnB1c2gocmVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19