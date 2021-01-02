const Cash = (props) => (
    <div>{props.title} {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
)

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        // ratioDollar: 3.6,
        // ratioEuro: 4.2,
    }

    currencies = [
        {
            id: 1,
            name: 'dollar',
            ratio: 3.6,
            title: "Wartość w dolarach"
        },
        {
            id: 2,
            name: 'dollar',
            ratio: 4.1,
            title: "Wartość w euro"
        },
        {
            id: 3,
            name: 'pound',
            ratio: 4.9,
            title: "Wartość w funtach"
        },
    ]

    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    }
    render() {
        const { amount, ratioDollar, ratioEuro } = this.state;
        return (
            <div className="app">
                <label>
                    <input type="number"
                        value={this.state.amount}
                        onChange={this.handleChange} />
                </label>
                {/* <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
                <Cash cash={amount} ratio={ratioEuro} title="Wartość w euro: " /> */}
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))