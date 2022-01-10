import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Recipe from "./Components/Recipe";
import Button from "./Components/common/Button";
import AbsluteInput from "./Components/AbsluteInput";
import "./App.css";
import "./Styles/button.css";

function App() {
  const [recipes, setRecipes] = useState([
    {
      title: "Seconde",
      time: "1:20",
      serve: 4,
      instruction: "1- some fresh perple",
      id: uuid(),
      ingredients: [
        {
          name: "Delester",
          amount: 4,
        },
        {
          name: "Shirmoz",
          amount: 7,
        },
      ],
    },
    {
      title: "First",
      time: "1:10",
      serve: 2,
      instruction: "1- some additional solt",
      id: uuid(),
      ingredients: [
        {
          name: "Delester",
          amount: 2,
        },
        {
          name: "Shirmoz",
          amount: 1,
        },
      ],
    },
  ]);

  const [absluteInput, setAbsluteInput] = useState(false);
  const [editeRecipe, setEditeRecipe] = useState({});

  // const addRecipe = newRecipeObj => {
  // let newRecipe = {};
  // if (!newRecipeObj)
  //   newRecipe = {
  //     title: "unNamed",
  //     time: "1:30",
  //     serve: 1,
  //     instruction: "some notes!",
  //   };
  // else newRecipe = newRecipeObj;
  // setRecipes([newRecipeObj, ...recipes]);
  // setAbsluteInput(true);
  // };

  const addRecipe = () => {
    setAbsluteInput(true);
    setEditeRecipe({});
  };

  const handleDelete = id => {
    setRecipes(recipes.filter(r => r.id !== id));
    setAbsluteInput(false);
  };

  const handleEdit = id => {
    const recipe = recipes.filter(r => r.id === id)[0];
    setEditeRecipe(recipe);
    setAbsluteInput(true);
  };

  const handleSave = (newRecipeObj, recipe) => {
    if (recipe.id === newRecipeObj.id) {
      const copyRecipes = [...recipes];
      const indexOf = copyRecipes.indexOf(recipe);
      copyRecipes[indexOf] = { ...newRecipeObj };
      setRecipes(copyRecipes);
      console.log(indexOf);
    } else setRecipes([newRecipeObj, ...recipes]);
    setAbsluteInput(false);
  };

  // const person = {
  //   name: "reza",
  //   age: 32,
  // };

  // console.log({ ...person, ...{ name: "amirali" } });

  // const newName = { name: "amirAli" };
  // console.log({ ...person, ...newName });
  // console.log(person);

  // const persons = [
  //   { name: "reza", age: 32 },
  //   { name: "amirAli", age: 3 },
  // ];

  // console.log([{ name: "zahra", age: 24 }, ...persons]);

  return (
    <div className="App">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          onEdit={() => handleEdit(recipe.id)}
          onDelete={handleDelete}
        />
      ))}
      {!absluteInput && (
        <Button title="Add New Recipe" name="add" onClick={addRecipe} />
      )}
      {absluteInput && (
        <AbsluteInput
          onClose={() => setAbsluteInput(false)}
          handleSave={handleSave}
          recipe={editeRecipe}
        />
      )}
    </div>
  );
}

export default App;
