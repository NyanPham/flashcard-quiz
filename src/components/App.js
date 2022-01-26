import '../styles/App.css';
import CustomSelect from './CustomSelect'
import CustomNumberInput from './CustomNumberInput';
import Flashcard from './Flashcard'
import { useState, useEffect } from 'react'
import useGetQuiz from '../api/useGetQuiz'
import useGetCategories from '../api/useGetCategories'
import { processRawQuizzes } from './helper'


function App() {

  const [selectedCategoryId, setSelectedCategoryId] = useState(9)
  const [amount, setAmount] = useState(10)
  const [loadCount, setLoadCount] = useState(0)

  const categories = useGetCategories()
  const rawQuizzes = useGetQuiz(amount, selectedCategoryId, loadCount)

  function handleGenerateClick() {
    setLoadCount(prevLoadCount => prevLoadCount + 1)
  }
  const quizzes = processRawQuizzes(rawQuizzes)
  console.log(quizzes)
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
        {quizzes.map((quiz, index) => {
          return (
            <Flashcard 
              key={index}
              question={quiz.question}
              answers={quiz.answers}
            />
          )
        })}
        {/* <Flashcard 
          question='Is Nyan handsome?'
          answers={[
            {
              text: 'Yes, he is.',
              correct: true
            },
            {
              text: 'No, he isn\'t.',
              correct: false
            }
          ]}
        />
        <Flashcard 
          question='Is Nyan handsome?'
          answers={[
            {
              text: 'Yes, he is.',
              correct: true
            },
            {
              text: 'No, he isn\'t.',
              correct: false
            }
          ]}
        />
        <Flashcard 
          question='Is Nyan handsome?'
          answers={[
            {
              text: 'Yes, he is.',
              correct: true
            },
            {
              text: 'No, he isn\'t.',
              correct: false
            }
          ]}
        /> */}
      </main>
    </div>
  );
}




export default App;
