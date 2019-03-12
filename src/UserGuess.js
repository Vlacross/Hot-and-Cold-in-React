import React from 'react';

import './UserForm.css'


export default function UserGuessForm(props) {



    return (
      <form id="inputForm" className="userGuessForm" onSubmit={props.onSubmit}>
        <label className="userGuessLabel" htmlFor="userGuess">Choose a number between 1 and 100!!</label>
          <input className="userInput" type="number" name="userGuess" min="1" max="100" onChange={props.onChange} required />
          <button className="guessNumberSubmit" type="submit" >Is This It?</button>
      </form>
      
    )
  }
