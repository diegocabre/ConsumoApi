import { useState } from "react";

export default function Buscador({ buscar }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="buscador">
      <input
        id="search"
        className="buscador"
        type="text"
        placeholder="Buscar Cocktail"
        onChange={handleChange}
      />
      <button className="botonBuscar" onClick={() => buscar(search)}>Buscar</button>
    </div>
  );
}
