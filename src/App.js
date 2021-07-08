import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState([]);

  const onRegistration = () => {
    const user_name = name;
    const user_email = email;
    const user_password = password;
    setUserData([
      ...userData,
      { name: user_name, email: user_email, password: user_password }
    ]);
  };

  const submitClick = (e) => {
    e.preventDefault();
    if (password !== setConfirmPassword) {
      alert("password is not matched");
      return;
    }
    return;
  };

  return (
    <div className="App" onSubmit={onRegistration}>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Enter name here"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter password here"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          value={confirmPassword}
          placeholder="Enter confirm password here"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Registration</button>
      </form>
      {userData.map((val) => {
        return (
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{password}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}
