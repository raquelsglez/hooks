import React from 'react';
import styles from './rickMorty.module.css';

const RickMortyCharacter = ({name, image, alt}) => {
    return(
        <div className={styles.rickMorty}>
            <h2>Personaje Rick and Morty</h2>
            <p>{name}</p>
            <img src={image} alt={alt} />
        </div>
    );
};

export default RickMortyCharacter;
