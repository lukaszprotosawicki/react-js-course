// Przycisk = po kliknieciu dodawana jest litera do tekstu

class App extends React.Component {

    state = {
        text: ""
    }
    render() {
        return (
            <div>
                <button>Dodaj "A"</button>
                <h1></h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))