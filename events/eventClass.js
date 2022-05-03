class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.greet = this.greet.bind(this);
    }

    render(){
        return(
            <div>

                <h1> Welcome, {this.props.firstName} </h1>
                <button onClick={this.getName.bind(this)}>Get Name </button>
                <button onClick={this.greet}>greet</button>
                <button onClick={()=>this.getAge()}>Getage </button>
                <button onClick={()=>{this.getData("Google")}}>Get Data </button>
            </div>
        );
    }

    getName(){
        console.log("this",this);
        console.log("Hello I am RoboCop");
    }

    greet(){
        console.log("hello GoodMorning");
    }

    getAge(){
        console.log("Age is 18");
    }

    getData(data){
        console.log("data",{data});
    }
    
}

ReactDOM.render(<Welcome firstName="sai"/>,document.getElementById("container"))