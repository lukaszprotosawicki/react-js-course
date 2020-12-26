//  FUNKCJA STRZALKOWA

const fn = (item) => {
    return console.log('Podany argument to ' + item)
}

// to samo

const fn = (item) => console.log('Podany argument to ' + item)

// to samo

const fn = (item) => (
    console.log('podany argument to ' + item)
)

// ----------------------------------------------------------------------

const fn = (item, item2) => {
    return `Podany argument to: ${item} i ${item2}`
}
const result = fn('hej!', 'ho!')
// result zawiera 'Podany argument to: hej! i ho!'

//  to samo ponizej

const fn = (item, item2) => (
    `Podany argument to: ${item} i ${item2}`
)
const result = fn('Hej!', 'Ho!')

    // METODA TABLIC I ITERATORY TABLIC

    //tablice
    .join()
    .concat()

    // iteratory tablic
    .map()
    .forEach()
    .filter()
    .find()
    .findIndex()

// METODA join()

const users = ['adam', 'bogdan', 'czarek', 'darek'];
// metoda join = zwraca stringa z tablicy
const usersString = users.join('');
console.log(usersString); // 'adam bogdan czarek darek'

//Metoda concat()

const users = ['adam', 'bogdan', 'czarek', 'darek'];

//Metoda concat = łączymy tablicę z innym elementem czy inną tablicą i zwracamy nową tablicę

const newUser = 'edyta';
const allUsers = users.concat(newUser)
console.log(allUsers);
//['adam', 'bogdan', 'czarek', 'darek', 'edyta']

// Operator spread - alternatywa dla metody concat()

const users = ['adam', 'bogdan', 'czarek', 'darek'];
const allUsers = [...users, 'edyta']
console.log(allUsers);
//['adam', 'bogdan', 'czarek', 'darek', 'edyta']

// map() - przykład 1
//metoda map zwraca nową tablicę o tej samej długości

const users = ['adam', 'bogdan', 'czarek', 'darek'];

const usersFirstLetterUpperCase = users.map(user => user[0].toUpperCase())
console.log(usersFirstLetterUpperCase);
// ['A', 'B', 'C', 'D']

// map() przykład 2
//metoda map zwraca nową tablicę o tej samej długości

const numbers = [2, 3, 4]
const doubleNumber = numbers.map(number => number * 2)
console.log(doubleNumber);
// [4, 6, 8]

// forEach() - przykład 1
// forEach - pracuje na tablicy, nie zwraca nowej(zwraca undefined)

const usersAge = [20, 24, 32, 48];
usersAge.forEach(age => console.log(`w przyszłym roku użytkownik będzie miał ${age + 1} lat`))

// w przyszłym roku użytkownik będzie miał 21 lat
// w przyszłym roku użytkownik będzie miał 25 lat
// w przyszłym roku użytkownik będzie miał 33 lat
// w przyszłym roku użytkownik będzie miał 49 lat

// forEach() - przykład 2
// forEach - pracuje na tablicy, nie zwraca nowej(zwraca undefined)

const usersAge = [18, 23, 37, 61];
let usersTotalAge = 0;

usersAge.forEach(age => usersTotalAge += age);
console.log(usersTotalAge);
//zmienna zawiera wartość 139

// forEach() - przykład 2
// forEach - pracuje na tablicy, nie zwraca nowej(zwraca undefined)

const usersAge = [18, 23, 37, 61];

const section = document.createElement('section')

usersAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<h1> Użytkownik ${index + 1}</h1> 
        <p> wiek: ${age}</p>`
    )
    if (index === array.lenght - 1) {
        document.body.appendChild(section);
    }
})

// Użytkownik 1
// wiek: 18
// Użytkownik 2
// wiek: 23
// Użytkownik 3
// wiek: 37
// Użytkownik 4
// wiek: 61

// filter() - przykład 1
//zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true

const users = ['adam', 'bogdan', 'czarek', 'darek'];

const NameWith6Letter = users.filter(user => user.length === 6)
console.log(NameWith6Letter);
//['bogdan','czarek']

// filter() z wykorzystaniem indexOf
//zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true

const users = ['adam', 'bogdan', 'czarek', 'darek'];

const NameWithLetterK = users.filter((user) => {
    return (user.indexOf('k') > -1)
})
console.log(NameWithLetterK)
//['czarek', 'darek']

