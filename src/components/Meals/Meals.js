import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [])

    const handleMeals = (meal) => {
        console.log(meal.strMeal);
        const newCart = [...cart, meal.strMeal]
        setCart(newCart);
    }

    return (
        <div className="meals-container">
            <div>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleMeals={handleMeals}
                    ></Meal>)
                }
            </div>

            <div>
                <h2>Show Instructions</h2>
                <p>{cart}</p>
            </div>
        </div >
    );
};

export default Meals;