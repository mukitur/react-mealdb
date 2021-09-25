import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strMealThumb, strMeal, strCategory, strArea } = props.meal;
    return (
        <div className="meal-container">
            <div>
                <img src={strMealThumb} />
            </div>
            <div>
                <h4>Name: {strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p> Area: {strArea}</p>
                <button onClick={() => props.handleMeals(props.meal)}>Click for Ingreadients</button>

            </div>
        </div>
    );
};

export default Meal;