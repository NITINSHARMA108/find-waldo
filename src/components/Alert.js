import React from 'react'

const Alert = function()  {
    return (
        <div>
            <p className="success">Woah!! Your guess is correct.</p>
            <p className="failure">Sorry!! Your guess is incorrect.</p>
        </div>
    )
}

export default Alert
