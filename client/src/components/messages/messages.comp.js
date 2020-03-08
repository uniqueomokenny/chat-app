import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './messages.styles.css';
import Message from '../message/message.comp';

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom className='messages'>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
