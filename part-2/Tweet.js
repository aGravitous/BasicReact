class Tweet extends React.Component {
    static defaultProps = {
        textColor: "pink",
        bkgColor: "purple"
    };

    render() {
        const { userName, name, date, msg } = this.props;
        const colors = {
            color: this.props.textColor,
            backgroundColor: this.props.bkgColor
        };

        return (
        <div style={colors}>
            <ul>
                <p>Username:{ userName } Name: { name}</p>
                <p>On: { date }</p>
                <b>{ msg }</b>
            </ul>
        </div>
        );
    }
}