
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header className='main-header'>
        Fun with GPT-3
      </header>
      <form>
        <label className='input-label'>Enter Prompt</label>
        <input 
          className="input-prompt" 
          type="text"/>
        <input 
          className="submit-input" 
          type="button" 
          value="Submit"/>
      </form>

      <div className='results-main-container'>
      <label className='response-heading'>RESPONSES</label>
        
        
        <div className='result-list'>
          
        </div>
      </div>
      <footer>
        Created by Edgar Cuellar
      </footer>
    </div>
  );
}

export default App;
