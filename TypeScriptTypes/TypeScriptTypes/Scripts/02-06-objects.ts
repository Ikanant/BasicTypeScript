module demo_02_06 {
    //  Object
    var points1 = { x: 1, y: 2 };
    var x = points1.x;

    var points2: {};;
    points2 = { x: 3, y: 4 };

    var points3: Object = { x: 5 };

    var rectangle = {
        h: 3,
        w: 5,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rect area = ' + rectangle.calcArea()); 

    // Functions
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1('2');
    console.log('squareIt1 = ' + val1); // In this case val1 will be a number because squareIt1 takes is ANY and returns a NUMBER
    val1 = squareIt1('John');
    console.log('squareIt1 = ' + val1); // This will yield NaN becayse 'John' was not able to be converted to a number

    var squareIt = function (rect: { h: number, w?:number }) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        else {
            return rect.h * rect.w;
        }
    }

    var sq1: number = squareIt({ h: 10 });
    console.log(sq1);
    var sq2: number = squareIt({ h: 3, w: 4 });
    console.log(sq2);
}