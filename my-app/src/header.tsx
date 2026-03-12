// import React from "react";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   return (
//     <header style={styles.header}>
//       <h1>My React TypeScript App</h1>

//       <nav>
//         <ul style={styles.navList}>
//           <li style={styles.navItem}>
//             <Link to="/">Home</Link>
//           </li>

//           <li style={styles.navItem}>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     backgroundColor: "#007acc",
//     color: "white",
//     padding: "15px",
//     textAlign: "center" as const
//   },

//   navList: {
//     display: "flex",
//     justifyContent: "center",
//     listStyleType: "none",
//     padding: 0
//   },

//   navItem: {
//     margin: "0 15px"
//   }
// };

// export default Header;


// import React from "react";
// import { Link } from "react-router-dom";


// const Header: React.FC = () => {
//   return (
//     <header style={styles.header}>
//       <h1>My React TypeScript App</h1>

//       <nav>
//         <ul style={styles.navList}>
//           <li style={styles.navItem}>Home</li>
//           <li style={styles.navItem}>About</li>
//           <li style={styles.navItem}>Services</li>
//           <li style={styles.navItem}>
//             <Link to="/contact">Contact</Link>
//             </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     backgroundColor: "#007acc",
//     color: "white",
//     padding: "15px",
//     textAlign: "center" as const
//   },

//   navList: {
//     display: "flex",
//     justifyContent: "center",
//     listStyleType: "none",
//     padding: 0,
//     textdecoration:"none",
//     color:"white",
//   },

//   navItem: {
//     margin: "0 15px",
//     cursor: "pointer",
    
//   }
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1>LIVE MONEY GRAPHY</h1>

      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
            <li style={styles.navItem}>
            <Link to="/dashbroad" className="nav-link">Dashbroad</Link>
          </li>

          <li style={styles.navItem}>
            <Link to="/about" className="nav-link">About</Link>
          </li>

          <li style={styles.navItem}>
            <Link to="/services" className="nav-link">Services</Link>
          </li>

          <li style={styles.navItem}>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "15px",
    textAlign: "center" as const
  },

  navList: {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    padding: 0
  },

  navItem: {
    margin: "0 15px"
  }
};

export default Header;