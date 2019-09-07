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
      .then(chapters => {this.setState({ chapters: chapters})});
  }

  onButtonClick = (id, locked) => {
    if (!locked) {
      fetch(`https://cm-home-assignment.herokuapp.com/chapters/${id}/challenges.json`)
        .then(response=> response.json())
        .then(challenges => {this.setState({ challenges: challenges})});
    }
  }

  render() {
    const { chapters, challenges } = this.state;
    const sortedChapters   = chapters.sort((a, b) => (a.position > b.position) ? 1 : -1)
    const sortedChallenges = challenges.sort((a, b) => (a.position > b.position) ? 1 : -1)
    return (
        <div> 
          <ChaptersList chapters={sortedChapters} onButtonClick={this.onButtonClick}/>
          {challenges.length ?  <ChallengesList challenges={sortedChallenges} />: <div></div>}
        </div>
      );
  }
}

export default App;