import { useState } from 'react';
import {useHistory} from 'react-router-dom'

function Register() {
  const history = useHistory()
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event){
    event.preventDefault();

    const response = await fetch('http://localhost:1600/register' , {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      } ,     
      body: JSON.stringify({
        fullname,
        username,
        password
      })
    })

    const data = await response.json();

    console.log(data);

    if(data.status === 'ok'){
      history.push('/login')
    }
  }

  return (
    <div class="container">
      <h1>Sign Up</h1>
      <form onSubmit={registerUser} >
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Full Name
          </label>
          <input 
            type="text" 
            class="form-control" 
            id="exampleInputPassword1"
            value = {fullname}
            onChange = {(e) => setFullname(e.target.value)} 
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Username
          </label>
          <input 
            type="text" 
            class="form-control" 
            id="exampleInputPassword1" 
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
