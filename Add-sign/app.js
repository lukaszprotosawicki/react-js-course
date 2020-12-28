// Przycisk = po kliknieciu dodawana jest litera do tekstu

class App extends React.Component {

    state = {
        text: ""
    }

    handleClick = () => {
        this.state.text += "a"
        console.log(this.state.text)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Dodaj "A"</button>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))