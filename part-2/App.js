class App extends React.Component {
    render() {
      return (
        <div>
          <Tweet userName="test1" name="Josh" date="date1" msg="Hello!"/>
          <Tweet userName="test2" name="Mark" date="date2" msg="Yes!"/>
          <Tweet userName="test3" name="Xenobius" date="date3" msg="Tomorrow!"/>
        </div>
      );
    }
  }