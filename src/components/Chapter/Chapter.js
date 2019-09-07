import React from 'react';
import './Chapter.css';

const Chapter = ({ name, locked, id, onButtonClick }) => {
    const onClick = () => {
      onButtonClick(id)
    }
    return (
      <button 
      	type="button" 
      	onClick={onClick}
        disabled = {locked}
      >
      	{name}
      </button>
  	);
}

export default Chapter;