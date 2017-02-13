import { Component, OnInit } from "@angular/core";
import { FirebaseServices } from "./Firebase.services";
import { UIDProvider } from "../../shared/UID.Provider";


@Component({
    selector: "Login",
    templateUrl: "pages/login/login.html",
    styleUrls: ['pages/login/style.css'],
    providers: [FirebaseServices, UIDProvider]
})


export class Login implements OnInit {

    private Email;
    private Password;
    IsLoggedIn: Boolean;
    
    constructor(private firebaseServices: FirebaseServices) { };

    ngOnInit() {
        this.IsLoggedIn = false;
    };

    Login() {
        this.firebaseServices.Login(this.Email, this.Password)
    }
    Signup() {
        return this.firebaseServices.SignUp(this.Email, this.Password);
    };

}