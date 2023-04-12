import "./styles.css";
import React from "react";
// import Counter from "./components/Counter";

// class App extends React.Component {
//   state = {
//     num: 0
//   };

//   componentDidMount() {
//     console.log("componentDidMount runs");
//   }

//   handleClick() {
//     this.setState((state) => ({ num: state.num + 1 }));
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick.bind(this)}>Inc</button>
//         <Counter number={this.state.num} />

//       </>
//     );
//   }
// }
export default function App() {
  const myDeb = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleChange = myDeb((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div className="deb">
      <input onChange={handleChange} />
    </div>
  );
}
// export default App;
