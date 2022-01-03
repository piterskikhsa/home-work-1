import React from 'react';
import {getDate, getName} from '../../utils'


class ProfileClass extends React.Component {

  render () { 
    return (
      <div className='card'>
        <p className='title'>Привет, <b>{getName(this.props.name)}!</b></p>
        <p>Дата регистрации: {getDate(this.props.registredAt)}</p>
      </div>
    );
  }
}

export default ProfileClass;
