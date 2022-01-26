import React, { useState } from 'react'

const Flashcard = (props) => {
    
    const [reveal, setReveal] = useState(false)

    const {
        question,
        answers
    } = props

    console.log(question, answers)

    const correctAnswer = answers.find(answer => answer.correct)

    return (
        <div 
            className={`card-container ${reveal ? 'reveal' : ''}`}
            onClick={() => setReveal(previousReveal => !previousReveal)}
        >
            <div className="card">
                <div className="front-face card-face">
                    <h3 className="question">{question}</h3>
                    <div className="answers">
                        {answers.map((answer, index) => {
                            return <p 
                                        className="answer"
                                        key={index}
                                    >{answer.text}</p>
                        })}
                    </div>
                </div>
                <div className="back-face card-face">
                    <p className="correct-answer">{correctAnswer.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard
