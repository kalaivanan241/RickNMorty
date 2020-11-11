import React from 'react'

function Banner({text, image}) {
    return (
        <div className="banner" style={{backgroundImage:"url("+image+")"}}>
            <div className="banner-text">
                <h1 className="banner-header">
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default Banner
