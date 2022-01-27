import { useState, useEffect } from 'react'

export default function useGetQuiz(categoryId, amount, loadCount) {
    const [rawQuizzes, setQuizzes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}`)
        .then(res => res.json())
        .then(data => {
            setQuizzes(data.results)
            setLoading(false)
        })
    } , [loadCount])
    
    return {
        rawQuizzes,
        loading
    }
}
