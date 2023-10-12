import { useState, useEffect } from "react";
import axios from "axios";
import Buscador from "./Buscador";
import { Card } from "./Card";
const abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const MiApi = () => {
  const [cocktails, setCocktails] = useState([]);
  const [variantes, setVariantes] = useState("");

  const handleClick = (e) => {
    setVariantes(e.target.value);
  };
  function buscar(texto) {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + texto)
      .then((response) => {
        const drinks = response.data.drinks;
        if (!Array.isArray(drinks)) {
          setCocktails([]);
          return;
        }
        setCocktails(
          drinks.map((drink) => {
            return {
              id: drink.idDrink,
              name: drink.strDrink,
              image: drink.strDrinkThumb,
              instruction: drink.strInstructionsES,
              category: drink.strCategory,
              glass: drink.strGlass,
              ingredientes: ingredientes(drink),
            };
          })
        );
      });
  }

  function ingredientes(cocktail) {
    let isnull = false;
    let pos = 1;
    const ingredientes = [];
    while (!isnull || pos > 15) {
      if (cocktail[`strIngredient${pos}`] !== null) {
        ingredientes.push(cocktail[`strIngredient${pos}`]);
      } else {
        isnull = true;
      }
      pos++;
    }
    return ingredientes;
  }

  useEffect(() => {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + variantes
      )
      .then((response) => {
        const drinks = response.data.drinks;
        if (!Array.isArray(drinks)) {
          return;
        }
        setCocktails(
          drinks.map((drink) => {
            return {
              id: drink.idDrink,
              name: drink.strDrink,
              image: drink.strDrinkThumb,
              instruction: drink.strInstructionsES,
              category: drink.strCategory,
              glass: drink.strGlass,
              ingredientes: ingredientes(drink),
            };
          })
        );
      });
  }, [variantes]);

  console.log(variantes);

  return (
    <div className="container">
      <Buscador buscar={buscar} />
      <div>
        <h1 className="tituloInicial text-center">
          Elige la Inicial de tu Cocktail
        </h1>
        <nav aria-label="...">
          <ul className="pagination paginationResponsive pagination-sm">
            {abc.map((a, index) => (
              <button
                key={index}
                type="button"
                value={a}
                className="page-link"
                onClick={handleClick}
              >
                {a}
              </button>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        {cocktails.length > 0 ? (
          cocktails.map((cocktail) => (
            <Card key={cocktail.id} cocktail={cocktail} />
          ))
        ) : (
          <h3>No existen resultados</h3>
        )}
      </div>
    </div>
  );
};

export default MiApi;
