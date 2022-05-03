// function Parent(props){
//     console.log("Props Parent",props);
//     return(
//         <div>
//             <h1>I m Parent {props.userName}</h1>
//             <Child appName="Netflix" user={props.userName} />
//         </div>
//     )
// }

// function Child(props){
//     console.log("Props child", props);
//     return(
//         <div>
//             <h1>I m Child</h1>
//             <h2>AppName is : {props.appName}, user: {props.user}</h2>
//         </div>
//     )
// }




//class
class Parent extends React.Component {
    render(){
        return(
            <div>
                <h1>I am Parent {this.props.userName}</h1>
                <Child appName="Netflix" user={this.props.userName}/>
            </div>
        )
    }
}

class Child extends React.Component {
    render(){
        return(
            <div>
                <h1>I am Child</h1>
                <h2>AppName is : {this.props.appName}, user: {this.props.user}</h2>
            </div>
        )
    }
}
ReactDOM.render(<Parent userName="Ajay"/>,document.getElementById("container"))