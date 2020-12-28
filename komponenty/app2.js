// komponent funkcyjny, bezstanowy

const Header = () => {
    return (<h1>Witaj na stronie</h1>
    )
}

// komponent klasowy, stanowy

class Blog extends React.Component {
    // state = {
    //     number: 0,
    // }
    render() {
        return (
            <section>
                <h2>Artykuł </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Illum nemo minima autem repellat, quam perferendis molestiae obcaecati est commodi deleniti officiis,
                     nulla officia nostrum aut a! Sunt reiciendis obcaecati optio.</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <div>
            <Header />
            <Blog />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))