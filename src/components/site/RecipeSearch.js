import React, { useState } from "react";
import {Container, Col, Row, Button, Form, Label, Input } from "reactstrap";
import APIURL from '../../helpers/environment';
import {addButton} from '../../Styles.js'
// import RecipeSearchResults from "./RecipieSearchResults";
require("dotenv").config();

const RecipeSearch = (props) => {
  const [recipe1, displayRecipes1] = useState([]);
  const [recipe2, displayRecipes2] = useState([]);
  const [recipe3, displayRecipes3] = useState([]);
  const [title1, displayTitle1] = useState([]);
  const [title2, displayTitle2] = useState([]);
  const [title3, displayTitle3] = useState([]);
  const [search, setSearch] = useState({
    food: "",
    diet: "",
    cuisineType: "",
    mealType: "",
  });
  console.log(props)

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

  // Fetch
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


// Using array.join to remove commas
// items in array still have special characters which cause an error in the console log

let recipe1out = recipe1.join();
let recipe2out = recipe2.join();
let recipe3out = recipe3.join();


// Save Search Results 
/* Need to figure out a function or if/then scenario to 
allow whichever recipes is slectect to populate the title/ingredients
*/

const saveSearch = (e) => {
  e.preventDefault();
  fetch(`${APIURL}/search/create`, {
    method: "POST",
    body: JSON.stringify({search: {label:title1, ingredients:recipe1out}}),
    headers: new Headers ({'Content-Type': 'application/json','Authorization': `Bearer ${props.token}`})
    })
    .catch(err => console.log(err))
  } // There is no notification of success or failure happening

 //Return
  return (
    <Container className="main">
      <div className="mainDiv">
        <h1>Recipe Finder</h1>
        <p><em>Yields three recipe ideas</em></p>
         {/* SEARCH FORM */}
        <Col>
        <Form onSubmit={(e) => onSubmitForm(e)} >
         <Label for="food">Main Food: </Label>
          <Input
            type="text" name="food"
          /> 
          <Label for="diet">Diet Preference: </Label>
          <Input
            type="text" name="diet"
          /> 
           <Label for="cuisineType">Cuisine Type: </Label>
          <Input
            type="text" name="cuisineType"
            /> 
          <Label for="mealType">Meal Type: </Label>
          <Input
            type="text"
           name="mealType"
          /> 
      <br />
        <Button style={addButton} type="submit">Submit</Button>
             </Form>
        </Col>
      </div>
      {/* Search Results */}
      <div>
      <Row>
    <Col>
      {title1}
      <ul>{recipeList1}</ul>
      <ul>{recipeList1.length > 0 ? <Button type="submit" onClick={saveSearch} >Select</Button> : null}</ul>
    </Col>
    <Col>
      {title2}
      <ul>{recipeList2}</ul>
      <ul>{recipeList2.length > 0 ? <Button type="submit" onClick={saveSearch} >Select</Button> : null}</ul>
    </Col>
    <Col>
      {title3}
      <ul>{recipeList3}</ul>
      <ul>{recipeList3.length > 0 ? <Button type="submit" onClick={saveSearch}>Select</Button> : null}</ul>
    </Col>
  </Row>
      </div>
    </Container >

  );
};

export default RecipeSearch;