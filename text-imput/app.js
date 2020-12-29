class App extends React.Component {
    state = {
        value: ""
    }

    handleImputChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input placeholder="wpisz..." onChange={this.handleImputChange.bind(this)} type="text" />
                <button>Reset</button>
                <h1 className="title">{this.state.value}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))