class App extends React.Component {
    state = {
        value: ""
    }

    handleImputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    handleResetClick = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.value} placeholder="wpisz..." onChange={this.handleImputChange} type="text" />
                <button onClick={this.handleResetClick}>Reset</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))