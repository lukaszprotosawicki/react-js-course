
const Person = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <button>Usuń</button>
        </li>
    )
}


class RemovingItems extends React.Component {
    state = {
        people: [
            { id: 1, name: 'Lukasz R' },
            { id: 2, name: 'Bartek L' },
            { id: 3, name: 'Piotr B' },
            { id: 4, name: 'Kamil W' },
            { id: 5, name: 'Angelika S' },
            { id: 6, name: 'Renata P' }
        ]
    }
    render() {
        return (
            <ul>
                {this.state.people.map(person => <Person key={person.id} name={person.name} />)}
            </ul>
        );
    }
}

ReactDOM.render(<RemovingItems />, document.getElementById('root'))