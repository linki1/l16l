class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    print() {
        console.log(this.age, this.name)
        return `Имя: ${this.name} <br>Возраст: ${this.age}`;
    }

}

class Car {
    constructor(year = 2000, yearCreate = 2000, marka = 'merseds', clas = 'sport car') {
        this.people = [];
        this.people.push(this.year = `Год покупки: ${year}`, this.yearCreate = `Год выпуска: ${yearCreate}`, this.marka = `Марка: ${marka}`, this.clas = `Класс авто: ${clas}`);
    }
    createOWner(people) {
        people.age > 18 ? this.owner = people : console.log('It age not comleat');
    }
    write() {
        this.people.map(elem => document.write(elem + "<br>"));
        document.write(` Владелец: <br> ${this.owner.print()} <br> <hr>`);
    }
}

let nik = new Human('nik', 19);
let carBmw = new Car(2020, 2018, 'bmw', 'sidan');

let Misha = new Human('Misha', 20);
let carMersedes = new Car(2021, 2019, 'mersedes', 'offroad');

let Andrei = new Human('Andrei', 54);
let carFerari = new Car(2023, 2019, 'ferari', 'sport-car');

carBmw.createOWner(nik);
carBmw.write();

carFerari.createOWner(Misha);
carFerari.write();

carMersedes.createOWner(Andrei);
carMersedes.write();
