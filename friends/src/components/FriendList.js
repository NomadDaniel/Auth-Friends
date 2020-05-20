import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Card } from 'semantic-ui-react';

const FriendList = () => {
  const [ friendList, setFriendList ] = useState( [] );

  useEffect( () => {
    axiosWithAuth()
      .get( '/friends' )
      .then( res => {
        console.log( res.data );
        setFriendList( res.data );
      } )
      .catch( err => console.log( err ) );
  }, [] );

  return (
    <div>
      <br />
      { friendList.map( item => {
        return (
          <Card key={ item.id }>
            <Card.Content>
              <Card.Header>N a m e : { item.name }</Card.Header>
              <Card.Description>
                A g e : { item.age } <br />
                E m a i l : { item.email }
              </Card.Description>
            </Card.Content>
          </Card>
        );
      } ) }
      <br />
      <Link to='/friends/add'>
        <button>Add a friend</button>
      </Link>
    </div>
  );
};

export default FriendList;