import React from "react";
import { useState } from "react";
import WelcomeComponent from "./Welcome";
import "./App.css";

const Login = () => {
  const [name, setName] = useState("");
  const [regno, setRegNo] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="body">
      <div className="form">
        <div className="inputs">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="regno">Registration Number</label>
          <input
            placeholder="Enter your Reg. No."
            value={regno}
            onChange={(event) => setRegNo(event.target.value)}
          />
          <button
            onClick={() => {
              setSubmit(!submit);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        {submit && name && regno && (
          <WelcomeComponent name={name} regno={regno}></WelcomeComponent>
        )}
      </div>
    </div>
  );
};

export default Login;
