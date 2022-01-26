import { useState, useEffect } from 'react'

export default function useGetQuiz(categoryId, amount, loadCount) {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}`)
        .then(res => res.json())
        .then(data => {
            setQuizzes(data.results)
        })
    } , [loadCount])
    
    return (
        quizzes
    )
}
