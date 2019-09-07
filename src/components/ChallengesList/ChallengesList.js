import React from 'react';
import Challenge from '../Challenge/Challenge';

const ChallengesList = ({ challenges }) => {
  return (
    <div>
      <h2>Challenges</h2>
      <ul>
        {
          challenges.map((challenge, i) => {
            return (
              <div key={`challenge_${challenge.position}`}>
              <li>
                  <Challenge
                    position={challenge.position}
                    stars={challenge.stars}
                  />
              </li>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ChallengesList;