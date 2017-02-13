import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()

export class UIDProvider {

    public UID =  new Subject<string>();;

    public constructor() { }

    GetUID() {
        return this.UID.asObservable();
    }
 
}