// Przycisk = po kliknieciu dodawana jest litera do tekstu

class App extends React.Component {
    state = {
        text: "",
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10)
        this.setState(() => ({
            text: this.state.text + number
        })
        )
    }

    render() {
        const btnName = "stwórz liczbę"
        return (
            <div>
                <button onClick={this.handleClick}>{btnName}</button>
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

ReactDOM.render(<App btnTitle="dodaj cyfrę" />, document.getElementById('root'))