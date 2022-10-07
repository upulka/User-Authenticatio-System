import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <BrowserRouter>
            <Route exact path = "/home">
                <Home/>
            </Route>
            <Route path = "/login">
                <Login/>
            </Route>
            <Route path = "/register">
                <Register/>
            </Route>
        </BrowserRouter>
    )
}

export default App;
