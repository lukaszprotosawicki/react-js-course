import React, { Component } from 'react';
import ReactDOM from 'react=dom';

class App extends Component {
    starte = {
        counter: 0
    }
    render() {
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))