"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var UIDProvider = (function () {
    function UIDProvider() {
        this.UID = new Rx_1.Subject();
    }
    ;
    UIDProvider.prototype.GetUID = function () {
        return this.UID.asObservable();
    };
    UIDProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UIDProvider);
    return UIDProvider;
}());
exports.UIDProvider = UIDProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUlELlByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVUlELlByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsbUJBQXdCLFNBQVMsQ0FBQyxDQUFBO0FBQ2xDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUkvQjtJQUlJO1FBRk8sUUFBRyxHQUFJLElBQUksWUFBTyxFQUFVLENBQUM7SUFFYixDQUFDOztJQUV4Qiw0QkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQVZMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFZYixrQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksbUJBQVcsY0FVdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFVJRFByb3ZpZGVyIHtcblxuICAgIHB1YmxpYyBVSUQgPSAgbmV3IFN1YmplY3Q8c3RyaW5nPigpOztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgR2V0VUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5VSUQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuIFxufSJdfQ==