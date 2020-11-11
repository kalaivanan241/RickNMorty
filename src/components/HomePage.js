import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import Character from './Character'
import CharacterList from './CharacterList'
import Modal from './Modal'
import Title from './Title'

function HomePage() {
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState("");
    const [character, setCharacter] = useState(null)

    function getCharacters()
    {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(data => data.json())
    }
    useEffect(() => {
        getCharacters().then(characters=> 
            setCharacters(characters.results)
            ).catch(err => {
                setError(err.message)
            })
    },[])
    const onCharacterSelect = id => {
        const selectedCharacter = characters.find(character=> character.id === id)
        setCharacter(selectedCharacter);
    }

    return (
        <div>
            <Title title={"Rick and Morty"}/>
            <Banner text={"Let's Begin Our Adventure"} image={"https://s2.thcdn.com/widgets/96-ie/../../widgets/96-en/49/main_banner-v2-035049.jpg"}/>
            {error.length === 0 ?
                <CharacterList characters={characters} onCharacterSelect={onCharacterSelect}/> 
                :
                <div className="error-content">
                    Error in fetching data from api
                </div>
            }
            { character !== null &&
                <Modal onClose={()=> setCharacter(null)}>
                    <Character character={character}></Character>
                </Modal>
            }
             
        </div>
       
    )
}

export default HomePage
