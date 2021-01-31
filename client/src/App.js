import './App.css';
import { useEffect, useState} from 'react';
import {Route, Switch, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, changePassword, removeToken } from './services/auth';
import Layout from './layouts/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MainContainer from './containers/MainContainer';



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
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path='/login'>
          <Login
            handleLogin={handleLogin}
            />
        </Route>
        <Route path='/register'>
          <Register
            handleRegister={handleRegister}
            />
        </Route>
        <Route path='/'>
          <MainContainer
          currentUser={currentUser}
          />
        </Route>     
      </Switch>
    </Layout>
  );
}

export default App;