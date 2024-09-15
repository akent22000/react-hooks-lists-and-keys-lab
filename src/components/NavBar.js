import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => {
    return (
      <li key={link}>
        {link}
      </li>
    );
  });
  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  return <nav>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
  </nav>;
}

export default NavBar;