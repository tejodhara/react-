function Welcome() {
    const [bikes,setbikes] = React.useState(["Perak","FZ","KTM","Benelli","MV Augusta"]);
    
    let removeKTM = () =>{
        let indexOfKTM = bikes.indexOf("KTM");
        if(indexOfKTM>=0){
            bikes.splice(indexOfKTM,1);
            setbikes([...bikes]); 
            console.log("indexOfKTM", indexOfKTM);
        }
    };
    return (
        <div>
            {bikes.map((val,idx)=>{
                return <h2 key={idx}>{val}</h2>
            })}
            <button onClick={removeKTM}> removeKTM</button>
        </div>
    )
}
ReactDOM.render(<Welcome />,document.getElementById("container"))