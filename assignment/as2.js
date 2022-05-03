
class Admin extends React.Component{
    state={
        adminName : "Girish",
        userName : "Ajay",
        isAdmin : true,
    }
    render(){
        let {adminName,userName,isAdmin} =this.state;
        return(
            <div>
                <h1>Home {adminName}</h1>
                <h3>Login</h3>
                
                <h3>Add Product</h3>
                <button value ="login" onClick={()=>{this.buttonClick.bind(this)}}>Button</button>
            </div>
        )
    }   
    buttonClick(){
        return(<User />)
    }
}
class User extends React.Component{
    render(){
        return(
            <div>
                <h1>Home {userName}</h1>
                <h2>Login</h2>
            </div>
        )
    }
}

ReactDOM.render(<Admin />,document.getElementById("container"))