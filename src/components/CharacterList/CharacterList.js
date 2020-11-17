import React from 'react'
import Character from '../Character'
import "./CharacterList.css"

function CharacterList({
    characters, onCharacterSelect
}) {
    return (
        <div className="grid-container-main">
            {characters.length > 0 ?
                (
                    <>
                    {characters.map((character) => (
                        <Character key={character.id} character={character} onCharacterSelect={onCharacterSelect}/>
                    ) )}
                    </>
                )
                :
                (
                    <div>
                        No List Available to show
                    </div>
                )
        }   
        </div>
    )
}

export default CharacterList
