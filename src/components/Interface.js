import React from 'react';

import Outcome from './Outcome';

function userInterface({ message, computer_score, PlayerScore, deal, hit, stand}) {
    return (
        <div>
            <Outcome message={message} />
            <div>
                <a className="score">Dealer Score : {computer_score}</a>
                <a className="score">Player Score : {PlayerScore}</a>
            </div>
            <button id="deal-button" onClick={deal}>Deal</button>
            <button id="hit-button" onClick={hit}>Hit</button>
            <button id="stand-button" onClick={stand}>Stand</button>
        </div>
    )
};

export default userInterface;