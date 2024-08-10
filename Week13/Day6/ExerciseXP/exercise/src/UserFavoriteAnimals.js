import React from 'react';

const UserFavoriteAnimals = (props)=>{
    console.log(props);
    const {favAnimals} = props
    
    return(
        <ul>
            {favAnimals.map((animal, index) => (
                <li key={index}>{animal}</li>
            ))}
        </ul>
    )
}

export default UserFavoriteAnimals;