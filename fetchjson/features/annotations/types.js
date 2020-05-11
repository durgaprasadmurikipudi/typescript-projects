var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var count = 0;
var hasName = false;
var randomName = 'Raja';
var NothingMuch = null;
var undefinedConst = undefined;
// built in objects
var date = new Date();
//ARRAY
// Array of strings
var colors = ['red', 'blue'];
// numbers array same a s like above
var someNumber = [1, 2];
// similary we can create of any  type as you wish
// CLasses
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//Object Literal
var coordinates = {
    x: 1,
    y: 25
};
//Function
var logNumner = function (i) {
    console.log(i);
};
// Another way of declaring function
var add = function (a, b) { return a + b; };
// Type annotation for a functions declared with function keyword
function hurray(a, b) {
    return a + b;
}
var divide = function (a, b) {
    return a / b;
};
//Functions that return any type.
var json = '{"x": 0, "y": 20}';
var point = JSON.parse(json);
// Never and void type
var logger = function (a) {
    console.log(a);
};
var throwError = function (a) {
    throw new Error(a);
};
// Destructuring with annotations
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(forecast);
};
var forecast = { date: new Date(), weather: 'sunny' };
logWeather(forecast);
//  object desctructuring in depth
var person = {
    name: 'cool',
    age: 27,
    location: {
        lat: -5,
        long: 10
    }
};
var newNAme = person.name, age = person.age, _a = person.location, lat = _a.lat, long = _a.long;
// WE know about string[] but do you know what is string[][], it is array of arrays holding string type values
// Flexible array types (sring | Date)[]
//Tuples - it is an array like structure where each element represents some property of a record.
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
// the same information can be represented as a array in form of tuple
var pepsi = ['brown', true, 40];
var cococola = ['brown', true, 37];
// better use case for a may be when reading a csv file ?
// Interface: creates new type descibing the proeprty name and value types of an object.
// You can fix long annotations and destructuring with interfaces
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () { return 'cool'; }
};
var printVehicle = function (vehicle) {
    console.log(printVehicle);
};
printVehicle(oldCivic);
var printVehicle1 = function (vehicle) {
    console.log(vehicle);
};
printVehicle1(oldCivic);
// When somethign is typecasted as ia interface type, all ti checks is if the object has all the properties mentioned in the
// interface, if it has some additional properties, it would not care.
// That way you can achieve code reusbaility to some extent like substituting cat or dog for an interface type animal.
// Classes
var VehicleC = /** @class */ (function () {
    function VehicleC() {
    }
    VehicleC.prototype.drive = function () {
        console.log('chuga chugga');
    };
    return VehicleC;
}());
var CarC = /** @class */ (function (_super) {
    __extends(CarC, _super);
    function CarC(color) {
        var _this = _super.call(this) || this;
        _this.color = 'true';
        _this.color = color;
        return _this;
    }
    CarC.prototype.honk = function () {
        console.log('beep');
    };
    return CarC;
}(VehicleC));
var carO = new CarC('BOw');
// The differences between es2015 classes nad typescript classes are presence of access modifiers
// public -> by default this is the access specifier in typescript
// protected -> this modifier lets a function get accessed only in child classes
// private, only methods belonging to the same class as this private methods can call this private methods.
