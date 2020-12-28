class ShoppingList extends React.Component {

    state = {
        items1: 'marchewka',
        items2: 'kawa',
        items3: 'chleb'
    }

    render() {
        return (
            <div>
                <h1>Lista zakupów</h1>
                <ul>
                    {/* <li>{this.state.items1}</li>
                    <li>{this.state.items2}</li>
                    <li>{this.state.items3}</li> */}
                    <ItemsList name="element 1" />
                    <ItemsList name="element 2" />
                    <ItemsList name="element 3" />
                </ul>
            </div>
        )
    }
}

const ItemList = (props) => {
    return (
        <li>{this.state.items1}</li>
    )
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'))