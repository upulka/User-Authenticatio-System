import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event){
    event.preventDefault();

    const response = await fetch('http://localhost:1600/login' , {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      } ,     
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await response.json();

    console.log(data);
  }

  return (
    <div class="container">
      <h1>Login</h1>
      <form onSubmit={loginUser} >
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
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
