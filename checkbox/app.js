const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>


class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false
    }
    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }
    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <PositiveMessage />
            } else {
                return <NegativeMessage />
            }
        }
    }
    render() {
        return (
            <div>
                <h1>Kup bilet na horror roku!</h1>
                <form>
                    <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
                    <label htmlFor="age">Mam co najmniej 16 lat</label>
                    <br />
                    <button type="submit">Kup bilet</button>
                </form>
                {this.displayMessage()}
            </div>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))