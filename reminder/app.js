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

const usersFirstLetterUpperCase = users.map(user =>
    user[0].toUpperCase())
console.log(usersFirstLetterUpperCase);
    // ['A', 'B', 'C', 'D']