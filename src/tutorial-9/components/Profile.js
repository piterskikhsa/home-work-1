import {getDate, getName} from '../../utils'

function Profile(props) {
  return (
    <div className='card'>
      <p className='title'>Привет, <b>{getName(props.name)}!</b></p>
      <p>Дата регистрации: {getDate(props.registredAt)}</p>
    </div>
  );
}

export default Profile;
