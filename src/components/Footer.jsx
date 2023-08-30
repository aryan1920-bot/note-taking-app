import React from "react";

const curryear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright @ {curryear} Aryan Singla</p>
    </footer>
  );
}

export default Footer;
