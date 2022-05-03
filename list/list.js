// let list = React.createElement("ul",null,
// React.createElement("li",null,"car"),
// React.createElement("li",null,"jeep")
// )

// create a list
let list = React.createElement("ul",{id:"list"},
React.createElement("li",{id : "car"},"car"),
React.createElement("li",{id : "jeep"},"jeep")
)

let mobiles = ["samsung","vivo","MI","apple","oneplus"]
// loop an array
let mobileItem = mobiles.map((value, index)=>{
    return React.createElement("li",{key:index},value)
})

// div to wrap all the elements
let allItems = React.createElement("div",null,list,mobileItem)

ReactDOM.render(allItems,document.getElementById("container"))
