import Boton from "./Boton";

function Lista({ datos, tipoBusqueda, accion }) {
  return (
    <div>
      <ul>
        {datos && datos.map((resultado) => (
          <li key={`${resultado.name}-${resultado.artist}`}>

            {tipoBusqueda == "album" && `${resultado.name} - ${resultado.artist}`}
            {tipoBusqueda == "artista" && resultado.name}
            {tipoBusqueda == "cancion" && `${resultado.name} - ${resultado.artist}`}

            <Boton
              texto="Ver detalle"
              accion={() => accion(resultado)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;