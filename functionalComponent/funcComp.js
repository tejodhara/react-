//functional component
function Header({brand,price}){
    return (
      <div>
          <h1>Hello World</h1>
          <h2>{brand} {price}</h2>
      </div>  
    );
}

function Content(props){
    console.log("props in Content",props);
    return (
      <div>
          <h1>I m Content {props.fname} {props.lname} {props.brand} {props.price}</h1>
      </div>  
    );
}

function Footer({person:{fname,lname}}){
    return (
      <div>
          <h1>I m Footer</h1>
          <h1>
              {fname} {lname}
          </h1>
      </div>  
    );
}

ReactDOM.render(<div>
    <Header brand="BMW" price="20"/>
    <Content />
    <Content fname="Sai" lname="CTV"/>
    <Content />
    <Content />
    <Footer person={{fname: "Raju", lname:"Rastogi"}}/>
</div>, document.getElementById("container"))