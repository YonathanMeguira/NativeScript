"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents),
            imports: [platform_1.NativeScriptModule, forms_1.NativeScriptFormsModule, http_1.NativeScriptHttpModule, router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx5QkFBZ0UsK0JBQStCLENBQUMsQ0FBQTtBQUNoRyxzQkFBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSxxQkFBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUN2RSw0QkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFXL0M7SUFBQTtJQUF5QixDQUFDO0lBUjFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUV6QixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxTQUFLLG1DQUFxQixDQUFDO1lBQ3RELE9BQU8sRUFBRSxDQUFDLDZCQUFrQixFQUFFLCtCQUF1QixFQUFFLDZCQUFzQixFQUFFLGlDQUF3QjtnQkFDbkcsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUMsQ0FBQztZQUM3QyxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYywgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNdLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=