import React from 'react';

import './input.styles.css';

export default function Input({ sendMessage, message, setMessage }) {
  return (
    <form className='form' onSubmit={sendMessage}>
      <input
        className='input'
        type='text'
        placeholder='Type a message'
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className='sendButton' onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}
