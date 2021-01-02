const Cash = (props) => (
    <div>{props.title} {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
)

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        product: 'gas'
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
    handleSelect = e => {
        this.setState({
            product: e.target.value
        })
    }

    insertSuffix(select) {
        if (select === "electricity") return <em> Kwh</em>
        else if (select === "gas") return <em> Litrów</em>
        else if (select === "oranges") return <em> Kilogramów</em>
    }
    render() {
        const { amount, product } = this.state;
        const calculators = this.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
        ))
        return (
            <div className="app">
                <label>Wybierz produkt:
                    <select value={product} onChange={this.handleSelect}>
                        <option value="electricity">Prąd</option>
                        <option value="gas">Benzyna</option>
                        <option value="oranges">Pomarańcze</option>
                    </select>
                </label>
                <br />
                <label>
                    <input type="number"
                        value={this.state.amount}
                        onChange={this.handleChange} />
                    {this.insertSuffix(this.state.product)}
                </label>

                {calculators}
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))