import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  function login(event) {
    //prevent reloads after clicking submit
    event.preventDefault();

    let user = {
      username: username,
      password: password,
    };

    axios
      .post('/api/user/login', user)
      .then((res) => {
        console.log(res);
        if (res.data === 'Login failed.') {
          swal({ title: res.data, icon: 'error' });
        } else {
          axios.post('/api/user/profile').then((res) => {
            window.location.href = '/profile';
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <form onSubmit={login}>
          <p>
            <b>Login Here</b>
          </p>
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
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default Login;
