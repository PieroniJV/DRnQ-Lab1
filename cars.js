class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    information(){
        console.log(`${this.make}`, `${this.model}`, `${this.year}` );
    }
}

class Cars extends Vehicle{
    constructor(make, model, year, doors){
       super(make, model, year);
        this.doors = doors;
    }

    information(){
        super.information();
        console.log(`${this.doors}`);
    }
}

let car = new Vehicle("Toyota", "Corolla", 2021);
let car2 = new Cars("Toyota", "Corolla", 2021, 4);
car.information();
car2.information();