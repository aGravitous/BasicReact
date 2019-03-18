class Tweet extends React.Component {
    render() {
        const { userName, name, date, msg } = this.props;

        return (
        <div className="Tweet">
            <ul>
                <p>Username:{ userName } Name: { name}</p>
                <p>On: { date }</p>
                <b>{ msg }</b>
            </ul>
        </div>
        );
    }
}