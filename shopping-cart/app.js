class App extends React.Component {
    state = {
        availableProducts: 10,
        shoppingCart: 2,
    }

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    render() {
        return (
            <div>
                <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
                <span> {this.state.shoppingCart} </span>
                <button>+</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))