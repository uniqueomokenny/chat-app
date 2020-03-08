import React from 'react';
import { Link } from 'react-router-dom';

import './join.styles.css';

export default function Join() {
  const [name, setName] = React.useState('');
  const [room, setRoom] = React.useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            type='text'
            placeholder='Name'
            className='joinInput'
            name='name'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Room'
            className='joinInput mt-20'
            name='room'
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className='button mt-20'>Sign in</button>
        </Link>
      </div>
    </div>
  );
}
