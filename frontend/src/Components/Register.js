import React from "react";
import { useHistory } from "react-router-dom";
export default function Register() {
  const history = useHistory();
  return (
    <div>
      <h2> Register </h2>
      <form>
        <div className={"container"}>
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />
          <p>
            By creating an account you agree to our
            <span onClick={termsClick}>Terms of use</span>.
          </p>

          <div className={"clearfix"}>
            <button type="submit" className={"signupbtn"}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  function termsClick() {
    history.push("/terms");
  }
}
