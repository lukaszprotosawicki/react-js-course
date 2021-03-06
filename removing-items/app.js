const Person = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <button onClick={props.delete}>Usuń</button>
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
    // handleDelete = (id) => {
    //     // console.log(this, id)
    //     const people = [...this.state.people];
    //     const index = people.findIndex(person => person.id === id)
    //     // console.log(index);
    //     // console.log(people);
    //     people.splice(index, 1)
    //     this.setState({
    //         people
    //     })
    // }

    handleDelete(name) {
        // let people = Array.from(this.state.people)
        let people = this.state.people.slice()
        // console.log(people)
        people = people.filter(person => name !== person.name)
        console.log(people)
        this.setState({
            people
        })
    }

    render() {
        // const people = this.state.people.map(person => (
        //     <Person
        //         key={person.id}
        //         name={person.name}
        //         delete={this.handleDelete.bind(this, person.id)}
        //     />
        // )
        const people = this.state.people.map(person => (
            <Person
                key={person.id}
                name={person.name}
                delete={this.handleDelete.bind(this, person.name)}
            />
        )
        )
        return (
            <ul>
                {people}
            </ul>
        );
    }
}

ReactDOM.render(<RemovingItems />, document.getElementById('root'))