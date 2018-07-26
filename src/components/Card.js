import React from 'react';

const card = ({ face }) => {

    let cardUrl = "images/" + face + ".png";

    return(
        <div className='card'>
            <img src={cardUrl} alt='imgagepicture' />
        </div>
    )
};

export default card;