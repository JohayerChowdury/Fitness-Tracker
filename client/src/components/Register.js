import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Register() {
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  function register(event) {
    //prevent reloads after clicking submit
    event.preventDefault();

    let user = {
      name: name,
      username: username,
      password: password,
    };

    axios
      .post('/api/user/new-user', user)
      .then((res) => {
        console.log(res);
        if (res.data === 'New user registered successfully.') {
          swal({ title: res.data, icon: 'success' });
        } else {
          swal({ title: res.data, icon: 'error' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <p></p>
        <p>Please make sure your username is at least 5 characters long.</p>
        <form onSubmit={register}>
          <p>
            <b>Register a new account</b>
          </p>
          <input
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Register" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default Register;
