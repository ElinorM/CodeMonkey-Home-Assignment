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
      challenges:[]
    }
  }

  componentDidMount() {
    fetch('https://cm-home-assignment.herokuapp.com/chapters.json')
      .then(response=> response.json())
      .then(chapters => {this.setState({ chapters: chapters})});
  }

  addChallenges = (challenges) => {
    this.setState({challenges: challenges});
  }

  render() {
    const { chapters, challenges } = this.state;
    const sortedChapters   = chapters.sort((a, b) => (a.position > b.position) ? 1 : -1)
    const sortedChallenges = challenges.sort((a, b) => (a.position > b.position) ? 1 : -1)
    return (
        <div className='tc'>
          <h1 className='f1'>Chapters</h1>
          <ChaptersList chapters={sortedChapters} addChallenges={this.addChallenges}/>
          {challenges.length ?  <ChallengesList challenges={sortedChallenges}/>: <div></div>}
        </div>
      );
  }
}

export default App;