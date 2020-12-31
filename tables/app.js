const data = {
    users: [
        {
            id: 1,
            age: 32,
            name: "Lukasz",
        },
        {
            id: 2,
            age: 29,
            name: "Patryk",
        },
        {
            id: 3,
            age: 33,
            name: "Kamil",
        }

    ]
}

const Item = (props) => (
    <div>
        <h1>Użytkownik {props.user.name}</h1>
        <h2>Ma {props.user.age}</h2>
    </div>
)

class ListItem extends React.Component {
    // state = {
    //     items: ["jablko", "sliwka", "gruszka"]
    // }
    render() {
        const users = this.props.data.users
        const Items = users.map(user => <Item key={user.id} user={user} />)
        return (
            <ul>
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItem data={data} />, document.getElementById('root'))