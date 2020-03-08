import React from 'react';

import OnlineIcon from '../../assets/online-icon.png';
import CloseIcon from '../../assets/close-icon.png';
import './info-bar.styles.css';

export default function InfoBar({ room }) {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={OnlineIcon} alt='online icon' />
        <h3>{room}</h3>
      </div>

      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={CloseIcon} alt='close icon' />
        </a>
      </div>
    </div>
  );
}
