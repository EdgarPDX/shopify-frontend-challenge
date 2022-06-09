
import React, { useState } from 'react';
import { getPrompt } from './function';
import Response from './results/Response';
import UserPrompt from './results/UserPrompt';

import './App.css';

export const App = () => {
  const [prompts, setPrompts] = useState([]);
  const [userPrompt, setUserPrompt] = useState('');
 
  const onSubmit = async(event)=>{
    event.preventDefault();
    
    let prompt = await getPrompt(userPrompt)
    await prompts.push({response:prompt.choices[0].text, user_prompt: userPrompt})
    setUserPrompt('');
   console.log(prompts)

  }

  const onChange = e => {
    setUserPrompt(
    e.target.value
    );
  };

  return (
    <div className="App">
      <header className='main-header'>
        Fun with GPT-3
      </header>
      <form>
        <label className='input-label'>Enter Prompt</label>
        <input 
          className="input-prompt"
          name='userPrompt' 
          type="text"
          onChange={onChange}
          value={userPrompt}
          placeholder="Write a poem about.."/>
          
        <button 
          className="submit-input" 
          type="button" 
          onClick={onSubmit}>
            Submit
          </button>
      </form>

      <div className='results-main-container'>
      <label className='response-heading'>RESPONSES</label>
        
        
        <div className='result-list'>
          {prompts.length === 0? "Enter a prompt": <> {prompts.map(prompt =>(
          <div className='prompt-container'>
            <UserPrompt userPrompt={prompt.user_prompt}/>
                <Response response={prompt.response}/>
          </div>)) }
          </>
            }

        
        </div>
      </div>
      <footer>
        Created by Edgar Cuellar
      </footer>
    </div>
  );
}

export default App;
