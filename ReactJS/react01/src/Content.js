import React from "react";

import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  //   const [name, setName] = useState("Ish");
  //   const [count, setCount] = useState(0);

  //   const handleNameChange = () => {
  //     const names = ["Ish", "Deepak", "Goku"];
  //     const int = Math.floor(Math.random() * 3);
  //     // return names[int];
  //     setName(names[int]);
  //   };

  //   const handleClick = () => {
  //     console.log("You Clicked it");
  //   };
  //   const handleClick2 = (name) => {
  //     console.log(`${name} was clicked`);
  //   };
  //   const handleClick3 = (e) => {
  //     console.log(e);
  //     console.log(e.target);
  //     console.log(e.target.innerText);
  //   };
  //   const handleClick4 = () => {
  //     setCount(count + 1);
  //     console.log(count);
  //   };

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Empty List</p>
      )}
    </>
    // <main>
    //   <p onDoubleClick={handleClick}>Hello {name} !</p>
    //   <br />
    //   <button onClick={handleNameChange}>Change Name</button>
    //   <br />
    //   {/* <p onDoubleClick={handleClick}>Hello {handleNameChange()} !</p><br /> */}
    //   <button onClick={handleClick}>Click me</button>
    //   <br />
    //   <button onClick={handleClick4}>Count me</button>
    //   <br />
    //   <button
    //     onClick={() => {handleClick2("Ish")}}>
    //     Click me 2
    //   </button>
    //   <br />
    //   <button
    //     onClick={(e) => {
    //       handleClick3(e);
    //     }}
    //   >
    //     Click me 3
    //   </button>
    //   <br />
    // </main>
  );
};

export default Content;
