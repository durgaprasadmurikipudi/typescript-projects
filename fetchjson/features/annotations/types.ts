const count: number = 0;
const hasName: boolean = false;
let randomName: string = 'Raja';

const NothingMuch:null = null;
const undefinedConst: undefined = undefined;

// built in objects
let date: Date = new Date()

//ARRAY
// Array of strings
let colors: string[] = ['red', 'blue'];
// numbers array same a s like above
let someNumber: number[] = [1, 2];
// similary we can create of any  type as you wish

// CLasses
class Car {

}
let car: Car = new Car();

//Object Literal
let coordinates: { x: number; y: number } = {
  x: 1,
  y: 25
};

//Function
const logNumner: (i: number) => void = (i:number) => {
  console.log(i);
};

// Another way of declaring function
const add = (a:number, b: number): number => a + b;

// Type annotation for a functions declared with function keyword
function hurray(a: number, b: number): number {
  return a + b;
} 

const divide = function(a: number, b: number): number {
  return a / b;
}
//Functions that return any type.
const json = '{"x": 0, "y": 20}';
const point : { x: number; y: number} = JSON.parse(json);

// Never and void type
const logger = (a: string): void => {
  console.log(a);
}

const throwError = (a: string): never => {
  throw new Error(a);
}
// Destructuring with annotations

const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
  console.log(forecast);
}

const forecast = { date: new Date(), weather: 'sunny'};

logWeather(forecast);

//  object desctructuring in depth

const person = {
  name: 'cool',
  age: 27,
  location: {
    lat: -5,
    long: 10
  }
}

const { name: newNAme, age, location: { lat, long }}: {name: string, age: number, location: { lat: number; long: number }} = person;

// WE know about string[] but do you know what is string[][], it is array of arrays holding string type values
// Flexible array types (sring | Date)[]

//Tuples - it is an array like structure where each element represents some property of a record.
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// the same information can be represented as a array in form of tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
// THe type order is maintained strictly for ex: you cant do pepsi[0] = 40;
// You canls odeclare a type for this tuple like below
type Drink = [string, boolean, number];
const cococola: Drink = ['brown', true, 37];

// better use case for a may be when reading a csv file ?

// Interface: creates new type descibing the proeprty name and value types of an object.
// You can fix long annotations and destructuring with interfaces
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string { return 'cool'}
}

const printVehicle = (vehicle: { name: string; year: number; broken: boolean; summary: () => string}): void => {
  console.log(printVehicle)
}

printVehicle(oldCivic)

// else

interface Vehicle {
  name: String;
  year: number;
  broken: boolean;
  summary(): string
}

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(vehicle);
}

printVehicle1(oldCivic)

// When somethign is typecasted as ia interface type, all ti checks is if the object has all the properties mentioned in the
// interface, if it has some additional properties, it would not care.

// That way you can achieve code reusbaility to some extent like substituting cat or dog for an interface type animal.

// Classes

class VehicleC {
  constructor(public color: string)    {
    this.color = color;
  } 

  private honk(): void {
    console.log('beep');
  }
}

var carO = new CarC('BOw');

// The differences between es2015 classes nad typescript classes are presence of access modifiers
// public -> by default this is the access specifier in typescript
// protected -> this modifier lets a function get accessed only in child classes
// private, only methods belonging to the same class as this private methods can call this private methods.