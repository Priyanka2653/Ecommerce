import React, { useState } from "react";
import  Login  from './Login';
import  Register  from './Register';


function App() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forname) => {
        setCurrentForm(forname);
    }

    return (
        <div className="App">
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default App;
