"use strict";
var core_1 = require("@angular/core");
var List = (function () {
    function List() {
        this.ToDoList = [];
    }
    List.prototype.AddToList = function (task) {
        this.ToDoList.push(task);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQVcxQztJQUFBO1FBQ1csYUFBUSxHQUFHLEVBQUUsQ0FBQztJQU96QixDQUFDO0lBTEcsd0JBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBYkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztZQUFBO0lBWUYsV0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksWUFBSSxPQVFoQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMaXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsncGFnZXMvbGlzdC9zdHlsZS5jc3MnXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgICBwdWJsaWMgVG9Eb0xpc3QgPSBbXTtcblxuICAgIEFkZFRvTGlzdCh0YXNrKXtcbiAgICAgICAgdGhpcy5Ub0RvTGlzdC5wdXNoKHRhc2spXG4gICAgfVxuXG5cbn0iXX0=