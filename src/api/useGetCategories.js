import { useState, useEffect} from 'react';

export default function useGetCategory() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api_category.php')
            .then(res => res.json())
            .then(data => {
                setCategories(data.trivia_categories)
            })
    }, [])

    return categories
}
