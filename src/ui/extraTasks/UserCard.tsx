import blankUser from './blankUser.png';

export function UserCard(props) {
  if (!props.user) {
    return <div>No user</div>;
  }
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <div>
        <img
          src={props.user.avatar || blankUser}
          alt="avatar"
          style={{ width: '130px', height: '130px' }}
        />
      </div>
      <div>
        <h3>id: {props.user.id}</h3>
        <div>name: {props.user.name}</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {props.user.age < 18 && '🔞'}
          <div>age: {props.user.age}</div>
        </div>
        <div>email: {props.user.email}</div>
      </div>
    </div>
  );
}
