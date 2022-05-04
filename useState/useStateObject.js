function Welcome(){
    const [person,setperson] = React.useState({
        firstName : "sai",
        lastName : "CTV",
        age : null
    })

   let changeName= ()=>{
       //never set the state like this
        // setperson({                      //if we do like this we get the output only mukesh but not last name will not print
        //      firstName: "Mukesh",
        // })
        setperson({
            ...person,                        //spread operator is used, spread operator will make the copy of the person and make the changes
            firstName: "Mukesh",
            age: 12,
        })
    }
    return(
        <div>
            <h1>Welcome, {person.firstName} {person.lastName} {person.age}</h1>
            <button onClick={()=>{changeName()}}>Change name</button>
        </div>
    )
}

ReactDOM.render(<Welcome />,document.getElementById("container"))