class Form extends React.Component {
    state = {
        city: "Gorzów",
        text: "",
        isLoved: true
    }

    handleCityChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    handleTextChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleIsLovedChange = e => {
        this.setState({
            isLoved: e.target.checked
        })
    }

    render() {
        return (
            <div>
                <label>
                    Podaj miasto:
                    <input value={this.state.city} onChange={this.handleCityChange} type="text" />
                </label>
                <br />
                <label>Napisz coś o tym mieście
                    <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                </label>
                <br />
                <label>
                    Czy lubisz to miasto?
                    <input type="checkbox" checked={this.state.isLoved} onChange={this.handleIsLovedChange} />
                </label>

            </div>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById('root'))