import React from "react";
import Box from "@mui/material/Box";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import "./Login.scss";
// import LoginImg from "../../assets/login.png";
const Login = () => {
  return (
    <div className="login">
      <div className="avatar">
        {/* <img src={LoginImg} alt="" /> */}
      </div>
      <div className="inputfield">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
