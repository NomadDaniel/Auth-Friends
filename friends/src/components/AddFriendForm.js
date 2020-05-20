import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriendForm = ( props ) => {
  const [ addForm, setAddForm ] = useState( { name: '', age: '', email: '' } );

  const handleChange = e => {
    setAddForm( { ...addForm, [ e.target.name ]: e.target.value } );
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post( '/friends', addForm )
      .then( res => {
        console.log( res );
        setAddForm( res.data );
        props.history.push( '/friends' );
      } )
      .catch( err => console.log( err ) );
  };

  return (
    <div>
      <br />
      <form onSubmit={ handleSubmit }>

        <label>N a m e : </label>
        <input
          type='text'
          name='name'
          placeholder='username'
          value={ addForm.name || '' }
          onChange={ handleChange }
        />
        <br /><br />
        <label>A g e : </label>
        <input
          type='number'
          name='age'
          placeholder='age'
          value={ addForm.age || '' }
          onChange={ handleChange }
        />
        <br /><br />
        <label>E m a i l : </label>
        <input
          type='text'
          name='email'
          placeholder='email'
          value={ addForm.email || '' }
          onChange={ handleChange }
        /><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddFriendForm;