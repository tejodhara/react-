class Welcome extends React.Component{
    state= {
        firstName:"Ajay",
        age : 18,
    };
    changeName() {
        //Never Update the state like this
        // console.log("before udate",this.state.firstNmae);
        // this.State.firstName ="Vijay"
        // console.log("after udate",this.state.firstNmae);
        console.log("before udate",this.state.firstName);

        // setState is asynchronous
        this.setState({
            firstName: "Vijay",
            age: 28
        },
        ()=>{
            console.log("after udate",this.state.firstName);
         }
        );
    }

    render(){
        return(
            <div>
                <h1>Welcome, {this.state.firstName} Age: {this.state.age}</h1>
                <button onClick={()=>{this.changeName()}}> changeName </button>
            </div>
        )
    }
}
ReactDOM.render(<Welcome />,document.getElementById("container"))

















ReactDOM.render()