/* class component */
class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello I am Car!</h2>
        
      </div>
    );
  }
}

/* Functional component */
function Cars(props){
    return (
        <div>
            <h2>Cars1 {props.carName}</h2>
            <p>Its a animation movie</p>
        </div>
    )
}

/* pass data from parent to child  */


function Parent(){
  return(
    <div>
      <h2>I am Parent</h2>
      <Child cname="teja"/>
    </div>
  );
}
function Child(props){
  return(
    <div>
      <h2>I am child {props.cname}</h2>
    </div>
  )
}

class Parent extends React.Component{
  render(){
    return(
      <div>vetrual dom has diffing algorithm </div>
    )
  }
}
class Child extends React.Component{
  render(){
    return <div> hello don't forget Real dom </div>
  }
}

ReactDOM.render(
  <div>
    <Car />
    <Cars carName ="red car"/>
    <Parent />
    <Parent />
  </div>,
  document.getElementById("container")
);
