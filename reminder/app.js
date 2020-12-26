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

    // Metody tablic i iteratory tablic

    .join()
    .concat()
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