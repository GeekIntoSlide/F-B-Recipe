import './Meals.css'
import React from 'react'
import Meal1 from'../static/meal1.jpg'
import Meal2 from'../static/meal2.jpg'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight} from "react-icons/ai";
export default function Meals() {
  return (
    <section className='meals'>
    <div className='meals-section'>
     <div className='meals-text'>
      <h1>Meals</h1>
      <h2>F <span>&</span> B Recipes </h2>
     </div>
     <div className='meals-list'>
      <div>
        <img src={Meal1}/>
        <div className='meal-desc'>
            <p>Vegan</p>
            <p>Paled</p>
            <h1>Avocado Salad</h1>
            <div className='meal-nut'>
                <h2><i class="fa-brands fa-hotjar"></i> 400 Calories</h2>
                <h2><i class="fa-solid fa-fork-knife"></i> NutriScore <i class="fa-regular fa-registered"></i> 92</h2>
                <h2 ><i class="fa-regular fa-star"></i> 4.8 rating (441)</h2>           
            </div>
        </div>
      </div>
      
      <div>
        <img src={Meal1} class="meal2img"/>
        <div className='meal-desc'>
            <p>Vegan</p>
            <p>Paled</p>
            <h1>Avocado Salad</h1>
            <div className='meal-nut'>
                <h2><i class="fa-brands fa-hotjar"></i> 400 Calories</h2>
                <h2><i class="fa-solid fa-fork-knife"></i> NutriScore <i class="fa-regular fa-registered"></i> 92</h2>
                <h2 ><i class="fa-regular fa-star"></i> 4.8 rating (441)</h2>     
                    
            </div>
        </div>
      </div>
      <div className='diet'>
        <h2>Works with any diet:</h2>
        <h1><AiOutlineCheck/>Vegetarian</h1>
        <h1><AiOutlineCheck/>Vegan</h1>
        <h1><AiOutlineCheck/>pescatarian</h1>
        <h1><AiOutlineCheck/>Gulten-free</h1>
        <h1><AiOutlineCheck/>lactose-free</h1>
        <h1><AiOutlineCheck/>Keto</h1>
        <h1><AiOutlineCheck/>Paleo</h1>
        <h1><AiOutlineCheck/>Low FODMAP</h1>
        <h1><AiOutlineCheck/>Kid-friendly</h1>
        <h2 className='see'>See all recipes</h2> 
     </div>
     </div>
    </div>
    </section>
  )
}
