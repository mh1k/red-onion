import { useState } from 'react';
import { useEffect } from 'react';


const useMeals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setMeals(data))
            .catch(err=>console.log(err))

    },[])


    return [meals,setMeals]
    
};

export default useMeals;