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
                    <ItemList name={this.state.items1} example={2 + 2} />
                    <ItemList name={this.state.items2} />
                    <ItemList name={this.state.items3} />
                </ul>
            </div>
        )
    }
}

// const ItemList = (props) => {
//     return (
//         <li>{props.name} - {props.example}</li>
//     )
// }

class ItemList extends React.Component {
    render() {
        return (
            <li>{this.props.name} - {this.props.example}</li>
        )
    }
}






ReactDOM.render(<ShoppingList />, document.getElementById('root'))