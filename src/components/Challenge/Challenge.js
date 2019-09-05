import React from 'react';
import YellowStar from './YellowStar.svg';
import BlankStar  from './BlankStar.svg';
import './Challenge.css';

const Challenge = ({ position, stars }) => {
	const starsArray = []
    for (let i = 0; i < stars; i++) {
    	starsArray.push(YellowStar)
    }
    for (let i = stars; i < 3; i++) {
    	starsArray.push(BlankStar)
    }

	return (
      <div className='rowC'>
        <p>Challenge #{position}:</p>
        {
        	starsArray.map((star, i) => {
          		return (
            		<div>
              			<img alt= '' src ={`${starsArray[i]}`} />
            		</div>
          		);
        	})
      	}
      </div>
  	);
}

export default Challenge;