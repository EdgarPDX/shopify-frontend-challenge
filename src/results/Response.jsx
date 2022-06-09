import React from "react";
import './Response.css'

const Response = ({response}) =>(

<div className="reponse-container">
<p className="GPT">GPT-3 Says:</p>
<p className="GPT-response">{response}</p>
</div>

);

export default Response;