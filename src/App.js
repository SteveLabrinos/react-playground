import { Fragment, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>{!isLoggedIn ? <Login /> : <Home />}</main>
    </Fragment>
  );
}

export default App;
