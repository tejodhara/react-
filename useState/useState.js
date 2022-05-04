function Welcome() {

    const [name,setname] = React.useState("Ajay")
    const [age,setage] = React.useState(18)

    function changeName(){
        setname("Vijay");
        setage(28);
    }
    return(
        <div>
            <h2>Welcome, {name} Age: {age}</h2>
            <button onClick={()=>{changeName()}}>Change Name</button>
            {/* <button onClick={changeName}>Press here</button> */}
            {/* <button onClick={()=>{setname("vijay")}}>Press here</button> */}
        </div>
    )
}

ReactDOM.render(<Welcome />,document.getElementById("container"))