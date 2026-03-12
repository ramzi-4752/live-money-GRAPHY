// import React, { useState } from "react";

// const Contact: React.FC = () => {

//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Contact Us</h2>

//       <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto" }}>
        
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />

//         <textarea
//           placeholder="Enter your message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />

//         <button type="submit" style={{ padding: "10px 20px" }}>
//           Send Message
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send Message</button>

      </form>
    </div>
  );
};

export default Contact;