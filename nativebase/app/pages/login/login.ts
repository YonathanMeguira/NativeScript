import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import firebase = require("nativescript-plugin-firebase");
import { UIDProvider } from "../../shared/UID.Provider";

@Component({
    selector: "Login",
    templateUrl: "pages/login/login.html",
    styleUrls: ['pages/login/style.css']
})


export class Login implements OnInit {

    Email;
    Password;
    IsLoggedIn;

    constructor(private router: Router, private UIDProvider: UIDProvider) { }

    ngOnInit() {
        this.IsLoggedIn = false;
    }

    SignUp() {
        console.log(this.Email)
        firebase.createUser({
            email: this.Email,
            password: this.Password
        })
            .then(
            (result) => {
                this.IsLoggedIn = true;
                this.router.navigate(["List"]);

            },
            (errorMessage) => {
                alert({
                    title: "No user created",
                    message: errorMessage,
                    okButtonText: "OK, got it"
                })
                this.IsLoggedIn = false;
            }
            )
    }


    LoginFunc() {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.Email,
            password: this.Password
        }).then(
            (result) => {
                this.UIDProvider.UID = result.uid;
                this.router.navigate(["List"]);
                this.IsLoggedIn = true;
            },
            (errorMessage) => {
                console.log(errorMessage);
                this.IsLoggedIn = false;
            }
            )
    };
}