import React from 'react';
import './Chapter.css';

const Chapter = ({ name, locked, id, onButtonClick }) => {
	  const buttonStyle= locked ? 'locked': 'unlocked';

    return (
        <div>
            <button 
            	type="button" 
            	className={buttonStyle}
            	onClick={() => onButtonClick(id, locked)}
            >
            	{name}
            </button>
        </div>
  	);
}

export default Chapter;