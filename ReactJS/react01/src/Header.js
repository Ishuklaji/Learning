import React from "react";

const Header = ({title}) => {
  const headerStyle = {
    backgroundColor: "crimson",
    color: "wheat",
  };
  return (
    <header style={headerStyle} /*style={{backgroundColor:'crimson',color:'wheat'}}*/>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
    title:"Default Title"
}
export default Header;
