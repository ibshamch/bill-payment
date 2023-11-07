import { useState } from "react";
import "./body.component.css";
const Body = ({ heading, description, subdesc, caution }) => {
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };
  const handleClose = () => {
    setShowAlert(false);
  };
  return (
    <div className="main-body-container">
      <h1 className="heading">{heading}</h1>
      <p className="description">{description}</p>
      <p className="subdesc">{subdesc}</p>
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="input">
          <img src="" alt="" />
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Your email address"
          />
          <button type="submit">Get Started</button>
        </div>
      </form>
      <p>{caution}</p>
      {showAlert && (
        <div
          className="alert"
          style={
            showAlert
              ? { animation: "comefromtop 0.5s ease-in-out" }
              : { animation: "returnfromtop 0.5s ease-in-out" }
          }
        >
          <p>{`Subscription details has been sent to your provided email ${input}`}</p>
          <button onClick={handleClose}>X</button>
        </div>
      )}
    </div>
  );
};

export default Body;
