export const Card = ({ cocktail }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="nombreCocktail">{cocktail.name}</h2>
        <img
          className="img-fluid"
          src={cocktail.image}
          alt={cocktail.name}
          width={200}
          height={200}
        />
      </div>
      <div className="card-body">
        <p>
          <h2 className="preparado">Preparado:</h2> {cocktail.instruction}
        </p>
        <p className="vaso">Tipo de Vaso: {cocktail.glass}</p>
        <p className="categoria">Categoría: {cocktail.category}</p>
        <h2 className="ingredientes">Ingredientes:</h2>
        <ul>
          {cocktail.ingredientes.map((ingrediente, index) => (
            <li className="listaIngrediente" key={index}>
              {ingrediente}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
