class App extends React.Component{
    render () {
        return (
            <div>
                <Person name="Martha" age="12" hobbies={ ["trains", "telephones", "tomatoes"] }/>
                <Person name="Robert" age="40" hobbies={ ["mountains", "mold", "mediums"] }/>
                <Person/>
            </div>
        );
    }
}
