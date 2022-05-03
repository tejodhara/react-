// conditional  rendering
class Admin extends React.Component {
  state = {
    adminName: "Girish",
    userName: "Ajay",
    isAdmin: true,
  };

  render() {
    let {adminName,userName,isAdmin} = this.state;
    let renderData = null;
    if (isAdmin) {
      renderData = (
        <div>
          <h1>Admin Name: {adminName}</h1>
          <h1>Home</h1>
          <h1>Login</h1>
          <h3>Add Product</h3>
        </div>
      );
    } else {
      renderData = (
        <div>
          <h1>User Name: {userName}</h1>
          <h1>Home</h1>
          <h1>Login</h1>
        </div>
      );
    }
    return (
      <div>
        {renderData}
        <button
          onClick={() => {
            this.changeView();
          }}
        >
          {isAdmin ? "See user view" : "See Adin view"}
        </button>
      </div>
    );
  }
  changeView() {
    if (this.state.isAdmin) {
      this.setState({
        isAdmin: false,
      });
    } else {
      this.setState({
        isAdmin: true,
      });
    }
  }
}

ReactDOM.render(<Admin />, document.getElementById("container"));
