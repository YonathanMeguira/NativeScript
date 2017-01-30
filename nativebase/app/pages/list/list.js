"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var List = (function () {
    function List() {
        this.ToDoList = [];
        this.NewItem = "";
    }
    List.prototype.AddItemToList = function () {
        var _this = this;
        console.log(this.NewItem);
        if (this.ToDoList.some(function (x) { return x === _this.NewItem; })) {
            alert("your to do list already contains this tak");
        }
        else if (this.NewItem === "") {
            alert("new task can not be nul");
        }
        else {
            this.ToDoList.push(this.NewItem);
            firebase.setValue('/list', { task: this.NewItem });
            this.NewItem = "";
        }
    };
    List = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "pages/list/list.html",
            styleUrls: ['pages/list/style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxJQUFPLFFBQVEsV0FBVyw4QkFBOEIsQ0FBQyxDQUFDO0FBVzFEO0lBQUE7UUFFVyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQWtCeEIsQ0FBQztJQWhCRyw0QkFBYSxHQUFiO1FBQUEsaUJBY0M7UUFiRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFJLENBQUMsT0FBTyxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO1FBQ3RELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNoQyxRQUFRLENBQUMsUUFBUSxDQUNiLE9BQU8sRUFDUCxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQ3pCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQTNCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O1lBQUE7SUF5QkYsV0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksWUFBSSxPQXFCaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMaXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbGlzdC9zdHlsZS5jc3MnXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcblxuICAgIHB1YmxpYyBUb0RvTGlzdCA9IFtdO1xuICAgIHB1YmxpYyBOZXdJdGVtID0gXCJcIjtcblxuICAgIEFkZEl0ZW1Ub0xpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTmV3SXRlbSlcbiAgICAgICAgaWYgKHRoaXMuVG9Eb0xpc3Quc29tZSh4ID0+IHggPT09IHRoaXMuTmV3SXRlbSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwieW91ciB0byBkbyBsaXN0IGFscmVhZHkgY29udGFpbnMgdGhpcyB0YWtcIilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLk5ld0l0ZW0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwibmV3IHRhc2sgY2FuIG5vdCBiZSBudWxcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuVG9Eb0xpc3QucHVzaCh0aGlzLk5ld0l0ZW0pXG4gICAgICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICAnL2xpc3QnLFxuICAgICAgICAgICAgICAgIHsgdGFzazogdGhpcy5OZXdJdGVtIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLk5ld0l0ZW0gPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19