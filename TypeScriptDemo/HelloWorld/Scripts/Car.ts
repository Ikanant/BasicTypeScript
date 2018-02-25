class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    start() {
        alert('Engine STARTED: ' + this.engine);
    }
    stop() {
        alert('Engine STOPPED: ' + this.engine);
    }
}

window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
}