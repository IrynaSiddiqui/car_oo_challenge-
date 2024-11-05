class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep'
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);


class Car extends Vehicle {
    numWheels() {
        return 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);


class Motorcycle extends Vehicle {
    numWheels() {
        return 2;
    };
    revEngine() {
        return 'VROOM!!!'
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);



class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!' 
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full"
        }

        this.vehicles.push(vehicle);
        return 'Vehicle added!'
    }
}

let garage = new Garage(2);
