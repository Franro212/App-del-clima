import React from "react";
import { useState } from "react";
import UseClima from "../hooks/useClima";

function Formulario() {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda } = UseClima();
  const { ciudad, pais } = busqueda;
  const handleSubmit = (e) => {
    e.preventdefault()
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son requeridos");
    }
    console.log(handleSubmit);
  };
  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          ></input>
        </div>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <select id="pais" name="pais" onChange={datosBusqueda} value={pais}>
            <option value="">Seleccione un pais</option>
            <option value="CO">Colombia</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="UY">Uruguay</option>
          </select>
          <input type="submit" value="consultar clima" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
