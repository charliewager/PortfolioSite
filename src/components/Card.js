import React from 'react';

function Card (props) {

    const onClick = () => {window.open(props.url);}

    return(
        <div className="card" onClick = {onClick}>
            <img className='cardIMG' src={props.src}/>
            <h2 className="cardText">{props.children}</h2>
        </div>
    )
}

export default Card