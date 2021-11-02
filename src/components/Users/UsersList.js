import Card from '../UI/Card';
import User from './User';
import classes from './UsersList.module.css';

function UsersList({ users }) {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map(user => (
          <li key={Math.random().toString()}>
            <User {...user} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
