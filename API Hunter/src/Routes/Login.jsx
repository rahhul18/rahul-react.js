import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { username, password };

    axios
      .post("https://reqres.in/api/login", userdata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        localStorage.setItem("Token", data.token);
        navigate("/productcard")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Username:
              <input
              className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div> 
            <label>
              Password:
              <input
              className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button className="form-button" type="submit">Login</button>
          </div>
<br /> 
   
        </form>
      </header>
    </div>
  );
}

export default Login;
