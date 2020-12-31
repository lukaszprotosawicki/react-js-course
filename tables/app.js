const Item = (props) => <li>{`owoc ${props.content}`}</li>


class ListItem extends React.Component {
    state = {
        items: ["jablko", "sliwka", "gruszka"]
    }
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