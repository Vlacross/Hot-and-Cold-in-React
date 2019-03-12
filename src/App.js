import  React  from 'react';

import './App.css';
import UserGuessForm from './UserGuess';
import GuessHistory from './GuessHistory';
import ShowHint from './Hint';
import HowTo from './HowTo'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      currentInputVal: '',
      userGuess: '',
      previousGuesses: [],
      lastGuessDiff: '',
      hint: '',
      howToHide: true


    }
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
    this.handleInputVal = this.handleInputVal.bind(this);
    this.explainObjective = this.explainObjective.bind(this)

    this.calDistance = this.calDistance.bind(this)
  }

  componentDidMount() {
    this.handleNewGame()
    
  }

  calDistance() {
    console.log(this.state.randomNumber)

    let curNum = this.state.randomNumber - this.state.currentInputVal
    let preNum = this.state.randomNumber - this.state.previousGuesses[1]

    let arr = 
    [curNum, preNum].map(x => {
      if(x < 0){
        x = 0 - x
        }
        return x
    })
    
    if (arr[0] < arr[1]) {
      this.setState({
        hint: 'warmer'
      })
      return console.log('warmer', arr)
     } 
     this.setState({
       hint: 'colder'
     })
     return console.log('colder', arr)
   
  };

  handleNewGame(event) {
    console.log('newgems', this.state)
    this.setState({randomNumber: Math.floor(Math.random()*100)+1});
    this.setState({userGuess: 0});
    this.setState({previousGuesses: []})
  }



  handleGuessSubmit(e) {
    e.preventDefault();
    this.setState({
      userGuess: this.state.currentInputVal
    })
   this.state.previousGuesses.unshift(this.state.currentInputVal)
    console.log(this.state.previousGuesses)
    e.target.reset()
    this.setState({
      currentInputVal: ''
    })
    if(this.state.previousGuesses.length > 1) {
      this.calDistance()
    }
  }

  handleInputVal(event) {
    this.setState({
      currentInputVal: event.target.value
    })
    
  }

  explainObjective(e) {
    console.log(this.state.howToHide)
    let toggle = this.state.howToHide !== true ? true : false
    this.setState({
      howToHide: toggle
    })
  }




  render() {




    return (
      <div className="wrapper">

        <div className="gameControls">
          <button className="newGame control" onClick={e => this.handleNewGame(e)}>NewGame</button>
          <button onClick={e => this.explainObjective(e)} className="howToPlay control">HowToPlay</button>
          {!this.state.howToHide && <HowTo onClick={e => this.explainObjective(e)} />}
        </div>

        <div className="hint">
          <ShowHint hint={this.state.hint}/>
        </div>
  
        <div className="interface">
          <UserGuessForm onSubmit={e => this.handleGuessSubmit(e)} onChange={e => this.handleInputVal(e)} />
        </div>

        <div className="Attempts">
          <GuessHistory guessNumber={this.state.previousGuesses.length} guesses={this.state.previousGuesses} />
        </div>

      </div>
    );
  }
}

