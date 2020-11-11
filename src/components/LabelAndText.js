import React from 'react'

function LabelAndText({label,text}) {
    return (
        <div>
            <p>
                <b>{label}</b>
                <br/>
                {text}
            </p>
        </div>
    )
}

export default LabelAndText
