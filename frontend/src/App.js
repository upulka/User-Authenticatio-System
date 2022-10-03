import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <BrowserRouter>
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
