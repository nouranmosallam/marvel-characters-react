import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange})=>{

    return(
        <div className='pa2 mb3 db w-100'>
            <input type='search'className='w-25 pa3 br3' onChange={searchChange} placeholder='search characters' />
        </div>
    );

}
export default SearchBox;