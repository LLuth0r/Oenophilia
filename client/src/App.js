import './App.css';
import { useEffect, useState} from 'react';
import {Route, Switch, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, changePassword, removeToken } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

    const handleLogin = async (loginData) => {
      const userData = await loginUser(loginData);
      setCurrentUser(userData);
      history.push('/')
    }

    const handleRegister = async (registerData) => {
      const userData = await registerUser(registerData);
      setCurrentUser(userData);
      history.push('/')
    }

    const handleLogout = () => {
      setCurrentUser(null);
      localStorage.removeItem('authToken');
      removeToken();
    }

// Add a handlechange for password change**


  return (
    <div className="App">
    Get Hacking Dummy!
    </div>
  );
}

export default App;
