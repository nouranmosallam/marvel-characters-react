import React from 'react';
import './Card.css';

//<p className='h5 w5'>{desc}</p>
  
const Card = ({name,description,image})=>
{
    const desc = description.length > 100 ? description.substring(0, 100) + "..." : description;
    return (

        <div className='tc m-width20 grow br3 pa3 ma2 dib bw2 shadow-5 Card'>
            <img alt={name} src={image} width='200px' className='h5 w5'/>
            <div className='center'>
                <h2>{name}</h2>          
            </div>
        </div>
    );
}

export default Card;