class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "kawa", active: false },
            { id: 2, name: "ziemniaki", active: false },
            { id: 3, name: "bułka", active: false },
            { id: 4, name: "banan", active: false },
            { id: 5, name: "herbata", active: false },
            { id: 6, name: "makaron", active: false },
        ]
    }
    render() {
        return (
            <div>
                <Header items={this.state.items} />
                <ListItems />
            </div>
        );
    }
}

