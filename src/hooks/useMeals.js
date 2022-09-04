import { useState } from 'react';
import { useEffect } from 'react';


const useMeals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mh1k/red-onion/main/src/fakedata/items.json')
            .then(res => res.json())
            .then(data => setMeals(data))
            .catch(err=>console.log(err))

    },[])


    return [meals,setMeals]
    
};

export default useMeals;