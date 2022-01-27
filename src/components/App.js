import '../styles/App.css';
import CustomSelect from './CustomSelect'
import CustomNumberInput from './CustomNumberInput';
import Flashcard from './Flashcard'
import { useState, useMemo } from 'react'
import useGetQuiz from '../api/useGetQuiz'
import useGetCategories from '../api/useGetCategories'
import { processRawQuizzes } from './helper'
import LoadingScreen from './LoadingScreen';


function App() {

  const [selectedCategoryId, setSelectedCategoryId] = useState(9)
  const [amount, setAmount] = useState(10)
  const [loadCount, setLoadCount] = useState(0)

  const categories = useGetCategories()
  const { rawQuizzes, loading } = useGetQuiz(selectedCategoryId, amount, loadCount)
  function handleGenerateClick() {
    setLoadCount(prevLoadCount => prevLoadCount + 1)
  }

  const quizzes = useMemo(() => processRawQuizzes(rawQuizzes), [rawQuizzes])

  return (
    <div className="flashcard-quiz-app">
      <header className="header">
        <CustomSelect 
          selectLabel='Category' 
          selectedOptionId={selectedCategoryId}
          options={categories}
          changeOptionId={setSelectedCategoryId}
        />
        <CustomNumberInput
          title="Number of quiz"
          amount={amount}
          changeAmount={setAmount}
        />
        <button className="generate-button" onClick={handleGenerateClick}>Generate</button>
      </header>
      <main className="quiz-display">
        {loading ? <LoadingScreen />: 
        (quizzes.map((quiz, index) => {
          return (
            <Flashcard 
              key={index}
              question={quiz.question}
              answers={quiz.answers}
            />
          )
        }))}    
      </main>
    </div>
  );
}




export default App;
