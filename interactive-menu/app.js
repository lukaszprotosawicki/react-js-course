class App extends React.Component {
    state = {
        items: [
            { id: 1, content: "kawa", active: true },
            { id: 2, content: "ziemniaki", active: false },
            { id: 3, content: "bułka", active: false },
            { id: 4, content: "banan", active: false },
            { id: 5, content: "herbata", active: false },
            { id: 6, content: "makaron", active: true },
        ]
    }
    render() {
        return (
            <div>Menu</div>
        );
    }
}

