import React from 'react';
import Chapter from '../Chapter/Chapter';

const ChaptersList = ({ chapters , addChallenges}) => {
  
  return (
    <div>
      {
        chapters.map((chapter, i) => {
          return (
            <Chapter
              name={chapters[i].name}
              locked={chapters[i].locked}
              id={chapters[i].id}
              addChallenges = {addChallenges}
            />
          );
        })
      }
    </div>
  );
}

export default ChaptersList;