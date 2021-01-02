const Dollars = () => (
    <div>Wartość w dolarach :</div>
)

const Euros = () => (
    <div>Wartość w euro :</div>
)


class ExchangeCounter extends React.Component {
    state = {
        amount: ""
    }

    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    }
    render() {
        return (
            <div className="app">
                <label>
                    <input type="number"
                        value={this.state.amount}
                        onChange={this.handleChange} />
                </label>
                <Dollars />
                <Euros />
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))