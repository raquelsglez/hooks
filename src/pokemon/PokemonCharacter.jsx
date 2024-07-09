import React from 'react';
import styles from './pokemonCharacter.module.css';

const PokemonCharacter = ({name, image, alt}) => {
    return (
        <div className={styles.pokemon}>
            <h2>Personaje Pokemon</h2>
            <p>{name}</p>
            <img src={image} alt={alt}/>
        </div>
    );
};

export default PokemonCharacter;
