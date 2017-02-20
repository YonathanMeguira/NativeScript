import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { FirebaseServices } from "./pages/login/Firebase.services";
//telerik UI
import listViewModule = require("nativescript-telerik-ui/listview");
import drawerModule = require("nativescript-telerik-ui/sidedrawer");


@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, ...navigatableComponents],
    imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)],
    schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }
