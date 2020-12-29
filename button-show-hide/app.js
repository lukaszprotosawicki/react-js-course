class Message extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messageIsActive: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render() {
        console.log(this.state)
        const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatem in magnam amet dignissimos veritatis numquam, aliquam asperiores ex tenetur eum, voluptatum aliquid accusantium molestiae nesciunt error commodi blanditiis iste?"

        return (
            <div>
                <button onClick={this.handleClick}>Pokaż</button>
                <p>{text}</p>
            </div>
        )
    }
}

ReactDOM.render(<Message />, document.getElementById("root"))