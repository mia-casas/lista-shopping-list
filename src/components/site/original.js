<Container className="main">
      <div className="mainDiv">
        <h1>Recipe Finder</h1>
        <p><em>Yields three recipe ideas</em></p>
         {/* SEARCH FORM */}
        <Col>
        <form onSubmit={(e) => onSubmitForm(e)} >
         <label for="food">Main Food: </label>
          <input
            type="text" name="food"
          /> <br />
          <label for="diet">Diet Preference: </label>
          <input
            type="text" name="diet"
          /> <br />
           <label for="cuisineType">Cuisine Type: </label>
          <input
            type="text" name="cuisineType"
            /> <br />
          <label for="mealType">Meal Type: </label>
          <input
            type="text"
           name="mealType"
          /> <br />
      
        <Button type="submit">Submit</Button>
             </form>
        </Col>
      </div>
      {/* Search Results */}
      <div>
      <Row>

    <Col>
      {title1}
      <ul>{recipeList1}</ul>
      <ul>{recipeList1.length > 0 ? <Button type="submit" onClick={saveSearch}>Select</Button> : null}</ul>
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

        <Col>
          {title1}
          <ul>{recipeList1}</ul>
          <ul>{recipe1.length > 0 ? <Button></Button> : "" }</ul>

        </Col>
        <Col>
          {title2}
          <ul>{recipeList2}</ul>
          <ul>{recipe2.length > 0 ? <Button></Button> : "" }</ul>
        </Col>
        <Col>
          {title3}
          <ul>{recipeList3}</ul>
          <ul>{recipe3.length > 0 ? <Button></Button> : "" }</ul>
        </Col>
        <Row>
      </Row>

    </Container >