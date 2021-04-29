
const handleSubmit = () => {
  const [recipeList, updateRecipeList] = useState("");
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

      e.preventDefault();
      fetch(`${APIURL}/list/`, {
          method: "GET",
          body: JSON.stringify({list: {item:item, quantity:quantity, category:category}}),
          headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${props.token}`
          }).then((res) => res.json())
      }) .then((json) => updateRecipeList(json) )
    return (
    <div className="main">
        <div className="mainDiv">
          <h1>{recipeList}</h1>
        </div>
    </div>
    );
};

export default SavedRecipes;