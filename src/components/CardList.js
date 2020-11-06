import React from 'react';
import Card from './Card';

const CardList = ({characters}) => {
    return (
        <div className='pa2'>
            {
                characters.map((character, i) => {
                    return (
                        <Card
                            key={i}
                            name={characters[i].name}
                            description={characters[i].description}
                            image={characters[i].thumbnail.path + '.' + characters[i].thumbnail.extension}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;