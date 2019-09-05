import React from 'react';
import './Chapter.css';

const Chapter = ({ name, locked, id, addChallenges }) => {
	  const buttonStyle= locked ? 'locked': 'unlocked';
	  const onButtonClick = () => {
      if (!locked) {
        fetch(`https://cm-home-assignment.herokuapp.com/chapters/${id}/challenges.json`)
          .then(response=> response.json())
          .then(challenges => {addChallenges(challenges)});
      }
    }
    return (
        <div>
          <button 
          	type="button" 
          	className={buttonStyle}
          	onClick={onButtonClick}
          >
          	{name}
          </button>
        </div>
  	);
}

export default Chapter;