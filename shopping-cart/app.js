class App extends React.Component {
    state = {
        availableProducts: 10,
        shoppingCart: 0,
    }

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    handleAddToCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
        })
    }

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0
        })
    }

    render() {
        return (
            <div>
                <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
                <span style={this.state.shoppingCart === 0 ? { opacity: 0.3 } : {}}> {this.state.shoppingCart} </span>
                <button disabled={this.state.shoppingCart === this.state.availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
                {this.state.shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))