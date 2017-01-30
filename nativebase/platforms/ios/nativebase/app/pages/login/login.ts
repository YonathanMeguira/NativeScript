import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "Login",
    templateUrl: "pages/login/login.html",
    styleUrls: ['pages/login/style.css']
})


export class Login implements OnInit {

    Email;
    Password;
    IsLoggedIn;
    UID;



    constructor(private router: Router) { }


    ngOnInit() {
        this.IsLoggedIn = false
    }

    navigationExtras: NavigationExtras = {
        queryParams: {
            "UID": this.UID
        }
    };
    SignUp() {
        console.log(this.Email)
        firebase.createUser({
            email: this.Email,
            password: this.Password
        })
            .then(
            (result) => {
                this.IsLoggedIn = true;
                this.router.navigate(["List"], this.navigationExtras);

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
                this.UID = result.uid
                this.router.navigate(["List"], this.navigationExtras);
                this.IsLoggedIn = true;
            },
            (errorMessage) => {
                console.log(errorMessage);
                this.IsLoggedIn = false;
            }
            )
    }

    DirectAccess() {
        this.router.navigate(["List"]);
    }


}