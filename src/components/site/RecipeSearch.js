import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
require("dotenv").config();

const RecipeSearch = () => {
  const [recipe1, displayRecipes1] = useState([]);
  const [recipe2, displayRecipes2] = useState([]);
  const [recipe3, displayRecipes3] = useState([]);
  const [title1, displayTitle1] = useState([]);
  const [title2, displayTitle2] = useState([]);
  const [title3, displayTitle3] = useState([]);

  //RECIPE IMAGES????

  const [search, setSearch] = useState({
    food: "",
    diet: "",
    cuisineType: "",
    mealType: "",
  });

const onSubmitForm = (event) => {
  event.preventDefault();
  const { food, diet, cuisineType, mealType } = event.target;
  setSearch({
  food: food.value,
  diet: diet.value,
  cuisineType: cuisineType.value,
  mealType: mealType.value,
  });

  // Set Base API URL and Keys
  let baseURL = "https://api.edamam.com/";
  let appId = "cbecaae1";
  let appKey = "cef02729bb7c43f5132aeb83f4e22d49";

  // Create Search URL variable
  let url = `${baseURL}search?q=${food.value}&health=${diet.value}&cuisineType=${cuisineType.value}&mealType=${mealType.value}&app_id=${appId}&app_key=${appKey}`;

  // Insert Mean Girls Joke about making fetch happen
      fetch(url)
        .then((res) => res.json())
        .then((props) => {
          // Recipe 1

          displayRecipes1(props.hits[1].recipe.ingredientLines);
          displayTitle1(props.hits[1].recipe.label);
          // Recipe 2
          displayRecipes2(props.hits[2].recipe.ingredientLines);
          displayTitle2(props.hits[2].recipe.label);
          // Recipe 3
          displayRecipes3(props.hits[3].recipe.ingredientLines);
          displayTitle3(props.hits[3].recipe.label);
        });
    };

  //Convert recipe arrays into list items

  const recipeList1 = recipe1.map((recipe1) => <li>{recipe1}</li>);
  const recipeList2 = recipe2.map((recipe2) => <li>{recipe2}</li>);
  const recipeList3 = recipe3.map((recipe3) => <li>{recipe3}</li>);

  //Return
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Lista Recipe Finder</h1>
         {/* SEARCH FORM */}
        <Col>
        <form onSubmit={(e) => onSubmitForm(e)} >
     
          <label for="food">Main Food:</label>
          <input
            type="text" name="food"
          />
  
          <label for="diet">Diet Preference:</label>
          <input
            type="text" name="diet"
          />
       
      
          <label for="cuisineType">Cuisine Type:</label>
          <input
            type="text" name="cuisineType"
            />

          <label for="mealType">Meal Type:</label>
          <input
            type="text"
           name="mealType"
          />
      
        <button type="submit">Submit</button>
             </form>
        </Col>
      </div>
      <Row>
        <Col>
          {title1}
          <ul>{recipeList1}</ul>
          <ul>{recipe1.length > 0 ? <Button></Button> : "" }</ul>

        </Col>
        <Col>
          {title2}
          <ul>{recipeList2}</ul>
          <ul>{recipe2.length > 0 ? <Button on ></Button> : "" }</ul>
        </Col>
        <Col>
          {title3}
          <ul>{recipeList3}</ul>
          <ul>{recipe3.length > 0 ? <Button></Button> : "" }</ul>
        </Col>
      </Row>
    </div>
  );
};

export default RecipeSearch;