// komponent funkcyjny, bezstanowy

const App = () => {
    return (
        <div>
            <h1>Pierwszy komponent</h1>
        </div>
    )
}

// komponent klasowy, stanowy

class App2 extends React.Component {
    state = {
        number: 0,
    }
    render() {
        return (
            <section>
                <h2>komponent klasowy {this.state.number}</h2>
            </section>
        )
    }
}


ReactDOM.render(<App2 />, document.getElementById('root'))