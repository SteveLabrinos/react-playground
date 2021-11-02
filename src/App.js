import { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 && <UsersList users={users} />}
    </Fragment>
  );
}

export default App;
