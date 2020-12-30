class CheckboxAgeConfirmation extends React.Component {
    render() {
        return (
            <div>
                <h1>Kup bilet na horror roku!</h1>
                <input type="checkbox" id="age" />
                <label htmlFor="age"></label>
            </div>
        )
    }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById('root'))