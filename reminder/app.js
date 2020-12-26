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