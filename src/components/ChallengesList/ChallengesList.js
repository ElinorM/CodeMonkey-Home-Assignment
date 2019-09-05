import React from 'react';
import Challenge from '../Challenge/Challenge';

const ChallengesList = ({ challenges }) => {
  return (
    <div>
      <h2 className='f2'>Challenges</h2>
      {
        challenges.map((challenge, i) => {
          return (
            <div>
              <Challenge
                position={challenges[i].position}
                stars={challenges[i].stars}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default ChallengesList;