const fn = (item) => {
    return console.log('Podany argument to ' + item)
}

// to samo

const fn = (item) => console.log('Podany argument to ' + item)

// to samo

const fn = (item) => (
    console.log('podany argument to ' + item)
)