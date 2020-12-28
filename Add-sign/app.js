// Przycisk = po kliknieciu dodawana jest litera do tekstu

class App extends React.Component {
    state = {
        text: "",
        number: 2
    }

    handleClick = () => {
        const letter = "a";
        this.setState(() => ({
            text: this.state.text + letter
        })
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Dodaj "A"</button>
                <PanelResult text={this.state.text} />
            </div>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))