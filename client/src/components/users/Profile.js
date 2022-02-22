import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Profile() {
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [backenddata, setbackenddata] = useState('');

  function senddata(event) {
    //prevent reloads after clicking submit
    event.preventDefault();
    var current_user = {
      username: username,
    };

    axios
      .post('/api/health/add', current_user)
      .then((res) => {
        console.log(res);
        setbackenddata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row justify-content-center">
      <h1>Welcome to your profile, {username}</h1>
      <button onClick={senddata}>Create a new Health record.</button>
    </div>
  );
}

export default Profile;
