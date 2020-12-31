const data = {
    users: [
        {
            id: 1,
            age: 32,
            name: "Lukasz",
            sex: "male"
        },
        {
            id: 2,
            age: 29,
            name: "Patryk",
            sex: "male"
        },
        {
            id: 3,
            age: 33,
            name: "Kamil",
            sex: "male"
        },
        {
            id: 4,
            age: 19,
            name: "Angelika",
            sex: "female"
        },
        {
            id: 5,
            age: 53,
            name: "Renata",
            sex: "female"
        },

    ]
}

const Item = ({ user }) => (
    <div className="userInfo">
        <h1>Użytkownik {user.name}</h1>
        <p>Informacje o użytkowniku</p>
        <p>Wiek użytkownika: <strong>{user.age}</strong></p>
        <p>Płeć użytkownika: {user.sex}</p>
    </div>
)

class ListItem extends React.Component {
    state
    render() {
        let users = this.props.data.users
        users = users.filter((user) => user.sex === "female")
        const Items = users.map(user => <Item key={user.id} user={user} />)
        return (
            <ul>
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItem data={data} />, document.getElementById('root'))