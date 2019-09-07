import React from 'react';
import Chapter from '../Chapter/Chapter';

const ChaptersList = ({ chapters , addChallenges}) => {
  
  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {
          chapters.map((chapter, i) => {
            return (
              <li key={chapter.id}>
                <Chapter
                  name={chapter.name}
                  locked={chapter.locked}
                  id={chapter.id}
                  addChallenges = {addChallenges}
                />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ChaptersList;