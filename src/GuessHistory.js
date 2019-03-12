import React from 'react';

import './GuessHistory.css'

export default function guessHistory(props) {

  let history = props.guesses.map((guess, index) => 
  <li className="guessHistory" key={index}>
    <p className="guessList">
      {guess}
    </p>
  </li>)

  return (
    <div className="guessHistory">
    <ul className="alreadyGuessed">{history}</ul>
      <span className="numberOfGuesses">Currently on attempt #: {props.guessNumber + 1}</span>
    </div>
      
  )
}