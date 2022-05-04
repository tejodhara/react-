class Circle extends React.Component{
    state = {
        text : "",
    };
    render(){
        return(
            <div> 
                <h1> Circle</h1>
                <h2>   {this.state.text} </h2>

                <BChild getDataFromChild= {this.getDataFromChild.bind(this)} />
            </div>
        )
    }

    //choclocate to get data
    fun(d){
        setTimeout(()=>{this.setState({text: d})}),1000;
    }
}

class CChild extends React.Component{
    render(){
        console.log("props in child", this.props);
        let data = "Some of the models";
        return(
            <div> 
                <h2 id="d1">Bajaj CT 100</h2>
                  
                <button onClick = {()=>{this.props.getDataFromChild(data)}}>Send data to parent </button>
            </div>
        );
    }
}
ReactDOM.render(<div><Circle /></div>,document.getElementById("container"));