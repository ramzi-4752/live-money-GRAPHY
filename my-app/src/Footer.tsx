import React from "react";

const Footer: React.FC = () => {

  const footerStyle: React.CSSProperties = {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#1f2937",
    color: "white",
    textAlign: "center"
  };

  const linkStyle: React.CSSProperties = {
    color: "#60a5fa",
    margin: "0 10px",
    textDecoration: "none"
  };

  return (
    <footer style={footerStyle}>
      
      <h3>© Copyright</h3>

      <p>
        Live exchange rates dashboard built By 
        <strong> MOAHAMED ASHIK</strong>
      </p>

      {/* <div>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Contact</a>
      </div> */}

      <p style={{marginTop:"10px"}}>
        © {new Date().getFullYear()} Currency Dashboard. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;