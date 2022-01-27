import React, { useState, useRef, useEffect } from 'react'

const Flashcard = (props) => {
    const {
        question,
        answers
    } = props
    const correctAnswer = answers.find(answer => answer.correct)

    const [reveal, setReveal] = useState(false)
    const [maxHeight, setMaxHeight] = useState(300)

    
    const frontFace = useRef()
    const backFace = useRef()

    function getMaxHeight() {
        const height1 = frontFace.current.getBoundingClientRect().height
        const height2 = backFace.current.getBoundingClientRect().height
        setMaxHeight(Math.max(height1, height2))
    }

    useEffect(() => {
        window.addEventListener('resize', getMaxHeight)

        return () => window.removeEventListener('resize', getMaxHeight)
    }, [])
    
    useEffect(() => {
        getMaxHeight()
    }, [question, answers])



    return (
        <div 
            className={`card-container ${reveal ? 'reveal' : ''}`}
            onClick={() => setReveal(previousReveal => !previousReveal)}
        >
            <div className="card" style={{height: maxHeight}}>
                <div className="front-face card-face" ref={frontFace}>
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
                <div className="back-face card-face" ref={backFace}>
                    <p className="correct-answer">{correctAnswer.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard
