import React from "react";
import './UserPrompt.css'

const UserPrompt = ({userPrompt}) =>(

<div className="user-container">
<p className="user">Your request:</p>
<p className="user-request">{userPrompt}</p>
</div>

);

export default UserPrompt;