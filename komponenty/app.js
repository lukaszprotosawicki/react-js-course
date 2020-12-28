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
    render() {
        return (
            <section>
                <h2>komponent klasowy</h2>
            </section>
        )
    }
}


ReactDOM.render(<App2 />, document.getElementById('root'))