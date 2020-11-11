import React from 'react'
import LabelAndText from './LabelAndText'
import Image from "./Image"

function Character({character, onCharacterSelect}) {
    const {
        id,
        name, 
        location, 
        status, 
        species, 
        gender, 
        origin, 
        image
    } =  character;
    return (
        <div className="grid-item card" onClick={()=> onCharacterSelect(id)}>
            <div className="grid-container">
                <div className="grid-item">
                    <Image image={image} />
                </div>
            <div className="grid-item">
                    <LabelAndText label={"Name"} text={name}/>
                    <LabelAndText label={"Location"} text={location.name}/>
                    <LabelAndText label={"Status"} text={status} />
            </div>
            <div className="grid-item">
                    <LabelAndText label={"Species"} text={species} />
                    <LabelAndText label={"Gender"} text={gender} />
                    <LabelAndText label={"Origin"} text={origin.name} />
            </div>
            </div>
        </div>
    )
}

export default Character
