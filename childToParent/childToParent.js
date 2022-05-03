
class Parent extends React.Component{
    state = {
        text : "",
    };
    render(){
        return(
            <div> 
                <h1> Welcome, {this.state.text} </h1>
                <h2> i am Parent </h2>

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
        let data = "Hey Data from child";
        return(
            <div> 
                <h2>I m child </h2>
                <button onClick = {()=>{this.props.getDataFromChild(data)}}>Send data to parent </button>
            </div>
        );
    }
}
ReactDOM.render(<Parent />,document.getElementById("container"));