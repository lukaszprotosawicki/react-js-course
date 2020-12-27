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

