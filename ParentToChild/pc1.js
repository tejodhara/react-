// function Parent(props) {
//   let data = ["mango", "grapes", "chiku", "lichi", "kiwi"];
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <Child data={data} />
//     </div>
//   );
// }
// function Child(props) {
//   return (
//     <div>
//       {props.data.map((val, idx) => {
//         return <h2 key={idx}>{val}</h2>;
//       })}
//     </div>
//   );
// }

// class Component
class Parent extends React.Component {
  render() {
    let data = ["mango", "grapes", "chiku", "lichi", "kiwi"];
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <Child data={data} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((val, idx) => {
          return <h2 key={idx}>{val}</h2>;
        })}
      </div>
    );
  }
}
ReactDOM.render(<Parent name="Ajay" />, document.getElementById("container"));
