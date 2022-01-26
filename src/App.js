import './App.css';

function App() {
  return (
    <div className="flashcard-quiz-app">
      <header className="header">
        <div className="input-field">
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="General">General Programming</option>
            <option value="JavaScript">JavaScript</option>
            <option value="ReactJS">React.js</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="amount">Number of quiz</label>
          <select id="amount" name="amount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button>Generate</button>
      </header>
      <main class="quiz-display">
        <div className="card-container">
          hello
        </div>
        <div className="card-container">
          hello
        </div>
        <div className="card-container">
          hello
        </div>
      </main>
    </div>
  );
}

export default App;
