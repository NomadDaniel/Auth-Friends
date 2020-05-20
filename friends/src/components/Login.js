import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = ( props ) => {
  const [ friends, setFriends ] = useState( {
    credentials: { username: '', password: '' }
  } );

  const handleChange = e => {
    setFriends( {
      credentials: {
        ...friends.credentials,
        [ e.target.name ]: e.target.value
      }
    } );
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post( '/login', friends.credentials )
      .then( res => {
        console.log( res );
        localStorage.setItem( 'token', res.data.payload );
        props.history.push( '/friends' );
      } )
      .catch( err => console.log( err ) );
  };

  return (
    <div>
      <form onSubmit={ login }>
        <br />
        <h2>L o g i n  H e r e . . . </h2>

        <label>U s e r n a m e : </label>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={ friends.credentials.username }
          onChange={ handleChange }
        />
        <br />
        <br />
        <label>P a s s w o r d : </label>
        <input
          type='password'
          name='password'
          placeholder='password'
          value={ friends.credentials.password }
          onChange={ handleChange }
        />
        <br /><br />

        <button>L o g  i n </button>
      </form>
    </div>
  );
};

export default Login;