import React from 'react'

const Alert = function()  {
    return (
        <div>
            <p className="success">Great!! Your guess is correct.</p>
            <p className="failure">Sorry!! Your guess is incorrect. Try Again</p>
            <p className="server-error"> Sorry!! Cannot connect to server. Try Again</p>
        </div>
    )
}

export default Alert
