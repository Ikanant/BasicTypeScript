var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('Engine STARTED: ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Engine STOPPED: ' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
//# sourceMappingURL=Car.js.map