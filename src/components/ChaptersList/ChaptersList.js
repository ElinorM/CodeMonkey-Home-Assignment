import React from 'react';
import Chapter from '../Chapter/Chapter';

const ChaptersList = ({ chapters , onButtonClick}) => {
  
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
                  onButtonClick = {onButtonClick}
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