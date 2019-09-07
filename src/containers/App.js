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

  addChallenges = (challenges, id) => {
    this.setState({challenges: challenges});
  }

  render() {
    const { chapters, challenges, chapter_id } = this.state;
    const sortedChapters   = chapters.sort((a, b) => (a.position > b.position) ? 1 : -1)
    const sortedChallenges = challenges.sort((a, b) => (a.position > b.position) ? 1 : -1)
    return (
        <div> 
          <ChaptersList chapters={sortedChapters} addChallenges={this.addChallenges}/>
          {challenges.length ?  <ChallengesList challenges={sortedChallenges} chapter_id={chapter_id}/>: <div></div>}
        </div>
      );
  }
}

export default App;