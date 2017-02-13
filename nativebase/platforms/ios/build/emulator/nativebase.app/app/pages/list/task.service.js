"use strict";
var core_1 = require('@angular/core');
var firebase = require("nativescript-plugin-firebase");
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.GetTasks = function (url) {
        var onQueryEvent = function (result) {
            // note that the query returns 1 match at a time
            // in the order specified in the query
            if (!result.error) {
                console.log("Event type: " + result.type);
                console.log("Key: " + result.key);
                /*for (let i in result.value.task) {
                    list.push(result.value.task[i])
                }
                console.log("list : ")
                console.log(list);*/
                console.log(result.value.task);
                return result.value.task;
            }
        };
        console.log("queried");
        firebase.query(onQueryEvent, url, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.KEY
            },
        });
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsSUFBTyxRQUFRLFdBQVcsOEJBQThCLENBQUMsQ0FBQztBQUsxRDtJQUFBO0lBaUNBLENBQUM7SUEvQkcsOEJBQVEsR0FBUixVQUFTLEdBQVc7UUFFaEIsSUFBSSxZQUFZLEdBQUcsVUFBQyxNQUFNO1lBQ3RCLGdEQUFnRDtZQUNoRCxzQ0FBc0M7WUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDOzs7O29DQUlvQjtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEIsUUFBUSxDQUFDLEtBQUssQ0FDVixZQUFZLEVBQ1osR0FBRyxFQUNIO1lBQ0ksV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRzthQUN0QztTQUVKLENBQ0osQ0FBQztJQUNOLENBQUM7SUFsQ0w7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQW1DYixrQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksbUJBQVcsY0FpQ3ZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBUYXNrU2VydmljZSB7XG5cbiAgICBHZXRUYXNrcyh1cmw6IHN0cmluZyk6ICBhbnkge1xuXG4gICAgICAgIHZhciBvblF1ZXJ5RXZlbnQgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBub3RlIHRoYXQgdGhlIHF1ZXJ5IHJldHVybnMgMSBtYXRjaCBhdCBhIHRpbWVcbiAgICAgICAgICAgIC8vIGluIHRoZSBvcmRlciBzcGVjaWZpZWQgaW4gdGhlIHF1ZXJ5XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCB0eXBlOiBcIiArIHJlc3VsdC50eXBlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktleTogXCIgKyByZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICAvKmZvciAobGV0IGkgaW4gcmVzdWx0LnZhbHVlLnRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHJlc3VsdC52YWx1ZS50YXNrW2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpc3QgOiBcIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0KTsqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC52YWx1ZS50YXNrKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmFsdWUudGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWVyaWVkXCIpXG4gICAgICAgIGZpcmViYXNlLnF1ZXJ5KFxuICAgICAgICAgICAgb25RdWVyeUV2ZW50LFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpbmdsZUV2ZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuUXVlcnlPcmRlckJ5VHlwZS5LRVlcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==