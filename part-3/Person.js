class Person extends React.Component {
    static defaultProps = {
        name: "Joe",
        age: 35,
        hobbies: ["Tennis"]
    };

    render () {
        return (
            <div>
                <p>Learn some information about  { this.props.name }.</p>
                <h3>{ this.props.age > 18 ? "Please go vote!" : "You must be 18." }</h3>
                <ul>
                    {this.props.hobbies.map(h => <li>{ h }</li>)}
                </ul>
            </div>
        );
    }
}