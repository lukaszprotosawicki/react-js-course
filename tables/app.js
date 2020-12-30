class ListItem extends React.Component {
    state = {
        items: ["jablko", "sliwka", "gruszka"]
    }
    render() {
        return (
            <ul>
                {this.state.items.map(item => <li key={item}> {`owoc ${item}`}</li>)}
            </ul>
        )
    }
}

ReactDOM.render(<ListItem />, document.getElementById('root'))