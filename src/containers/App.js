import React, { Component } from 'react';
import './App.css';
import ChaptersList from '../components/ChaptersList/ChaptersList';
import ChallengesList from '../components/ChallengesList/ChallengesList';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      chapters: [],
      challenges:[],
    }
  }

  componentDidMount() {
    fetch('https://cm-home-assignment.herokuapp.com/chapters.json')
      .then(response=> response.json())
      .then(chapters => {this.setState({ chapters: this.sortByPosition(chapters)})})
      .catch(err => console.log(err));
  }

  sortByPosition = (array) => {
    return array.sort((a, b) => (a.position > b.position) ? 1 : -1)
  }

  onButtonClick = (id) => {
    fetch(`https://cm-home-assignment.herokuapp.com/chapters/${id}/challenges.json`)
      .then(response=> response.json())
      .then(challenges => {this.setState({ challenges: this.sortByPosition(challenges)})})
      .catch(err => console.log(err));

  }

  render() {
    const { chapters, challenges } = this.state;
    return (
        <div> 
          <ChaptersList chapters={chapters} onButtonClick={this.onButtonClick}/>
          {challenges.length>0 && <ChallengesList challenges={challenges} />}
        </div>
      );
  }
}

export default App;