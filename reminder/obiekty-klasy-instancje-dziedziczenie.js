// deklaracja klasy
class City {
}

// tworzenie instancji klasy
const Poznan = new City();
const Barcelona = new City();

// powstają dwa różne, niepołączone obiekty będące instancją City.
// City{}

// klasa = właściwości instancji 

class Country {
    constructor(name, capital, population) {
        this.name = name;
        this.capital = capital;
        this.population = population;
    }
}

const poland = new Country('Polska', 'Warszawa', '39000000')
console.log(poland)
// Country { name: 'Polska', capital: 'Warszawa', population: '39000000' }

// klasa - dodawanie metod do prototypów i instancji

class Country {
    constructor(name) {
        this.name = name; // właściwość każdej instancji
        this.showName = () => console.log(this.name) // metoda każdej instancji
    }
    // Wszystkie metody tworzone w klasie znajdują się w prototypie klasy, do której dostęp mają wszystkie instancje.
    showCountryName() {
        console.log(`Nazwa kraju to ${this.name}`);
    }
}

const Poland = new Country('Polska');
const Spain = new Country('Hiszpania');

Poland.showCountryName(); // Nazwa kraju to Polska
Spain.showCountryName(); // Nazwa kraju to Hiszpania
Poland.showName(); // Polska
Spain.showName(); // Hiszpania

//Klasa - metody prototypu czy instancji?

class Country {
    constructor(name) {
        this.name = name;
        this.showCountryName = function () {
            console.log('Metoda w instancji wskazuje: ' + this.name);
        }
    }
    showCountryName() {
        console.log(`Metoda w prototypie wskazuje ${this.name}`);
    }
}

const Poland = new Country('Polska');

Poland.showCountryName(); // Metoda w instancji wskazuje Polska

// klasa - dziedziczenie

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Imię osoby to ${this.name}`);
    }
}

class Student extends Person {
    constructor(name = "", degrees = []) {
        super(name)
        this.degrees = degrees;
    }
    showDegrees() {
        const completed = this.degrees.filter(degree => degree > 2)
        console.log(`Studen ${this.name} ma stopnie ${this.degrees} i zaliczył już ${completed.length} przedmiotów`)
    }
}

const Lukasz = new Student('Lukasz', [2, 3, 4, 5, 6, 4, 1])
Lukasz.showDegrees(); // Student Lukasz ma stopnie: 2, 3, 4, 5, 6, 4 i zaliczył już 5 przedmiotów

// Mechanizm this

const car = {
    brand: 'bmw',
    age: 2016,
    showAge() {
        console.log(`samochód z ${this.age} roku`);
    },
    showBrand: () => {
        console.log(`samochód marki ${this.brand}`)
    }
}

car.showAge(); // samochód z 2016 roku
car.showBrand(); // samochód marki undefined (dziedziczy po zakresie wyższym a w zakresie wyższym jest window. Więc window.brand zwraca nam undefined)

// Mechanizm this

const dog = {
    name: 'Max',
    showName() {
        console.log('imię psa to ' + this.name);
    }
}

dog.showName(); // imię psa to Max

const dogName = dog.showName.bind(dog)
dogName(); // imię psa to Max

const cat = {
    kids: ['ciapek', 'łapek'],
    showKidsNames() {
        console.log(`kot ma potomstwo: ${this.kids}`);
        const showKidsNumber = function () {
            console.log(this.kids.length);
        }.bind(this)
        showKidsNumber();
    }
}
cat.showKidsNames();
// showKidsName = kot ma potomstwo: ciapek, łapek
// showKidsNumber = 2