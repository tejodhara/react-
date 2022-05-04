

class Car extends React.Component{
    state = {
        text : "",
    };
    render(){
        return(
            <div> 
                <h1> Car</h1>
                <h2> Toyota  {this.state.text} </h2>

                <Child getDataFromChild= {this.getDataFromChild.bind(this)} />
            </div>
        )
    }

    //choclocate to get data
    getDataFromChild(childData){
        console.log("data in parent:" , childData);
        this.setState({
            text: childData,
        });
    }
}

class Child extends React.Component{
    render(){
        console.log("props in child", this.props);
        let data = "Models of Toyota";
        return(
            <div> 
                <h2>Toyota Etios</h2>
                <h2>Toyota Corolla Altis</h2>
                <button onClick = {()=>{this.props.getDataFromChild(data)}}>Send data to parent </button>
            </div>
        );
    }
}





// conditional  rendering
class Admin extends React.Component {
    state = {
      adminName: "Teja",
      userName: "Sai",
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
            {isAdmin ? "See user view" : "See Admin view"}
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

  
ReactDOM.render(<div><Car /><Admin /></div>,document.getElementById("container"));