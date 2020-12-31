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



const Item = (props) => <li>{`owoc ${props.content}`}</li>


class ListItem extends React.Component {
    // state = {
    //     items: ["jablko", "sliwka", "gruszka"]
    // }
    render() {
        const Items = this.state.items.map(item => <Item key={item} content={item} />)
        return (
            <ul>
                {Items}
            </ul>
        )
    }
}

ReactDOM.render(<ListItem />, document.getElementById('root'))