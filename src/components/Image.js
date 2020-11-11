import React from 'react'

function Image({image}) {
    return (
        <div className="icon-image" style={{background: "url("+image+")center no-repeat lightblue" , backgroundSize: "cover"}}>
               
        </div>
    )
}
export default Image
