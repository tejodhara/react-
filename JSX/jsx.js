let name = "raj";
let element = <h1>{name}</h1>

let mobiles = ["redmi","samsung","vivo","oppo","apple"]
let mobileItem = mobiles.map((value,idx)=>{
    return <li key={idx}>{value}</li>
})




// store all the items in one div tag
let allItem = <div>{element} {mobileItem}</div>

ReactDOM.render(allItem,document.getElementById("container"))