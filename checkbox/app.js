// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>

const ValidationMessage = (props) => <p>{props.txt}</p>

const OrderForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input type="checkbox" id="age" onChange={props.change} checked={props.isConfirmed} />
            <label htmlFor="age">Mam co najmniej 16 lat</label>
            <br />
            <button type="submit">Kup bilet</button>
        </form>
    )
}


class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false
    }
    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />
            } else {
                return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
            }
        } else {
            return null
        }
    }
    render() {
        const { isConfirmed, isFormSubmitted } = this.state
        return (
            <div>
                <h1>Kup bilet na horror roku!</h1>
                <OrderForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    checked={isConfirmed} />
                {/* <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed} />
                    <label htmlFor="age">Mam co najmniej 16 lat</label>
                    <br />
                    <button type="submit">Kup bilet</button>
                </form> */}
                {this.displayMessage()}
            </div>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))