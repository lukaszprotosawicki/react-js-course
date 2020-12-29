class App extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <input type="text" />
                <button>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))