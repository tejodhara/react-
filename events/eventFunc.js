function Welcome(props){
    let getName =() =>{
        console.log("I m Raju");
        console.log("fname from props", props.fname);
    };

    let getAge = (data) =>{
        console.log("data", {data});
    };

    return (
        <div>
            <h1>Welcome, {props.fname}</h1>                                 
            <button onClick={getName}> Get Name</button>
            <button onClick={()=>{getAge("google")}}> Get Age</button>
        </div>
    );
}

ReactDOM.render(<Welcome fname="Raju"/>,document.getElementById("container"))