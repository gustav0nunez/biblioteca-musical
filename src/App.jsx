import { useState } from "react";
import NavBar from "./componets/Navbar";
import Lista from "./componets/Lista";
import Detalle from "./componets/Detalle";

import { buscarAlbumes, obtenerInfoAlbum } from "./Axios/services/albumService";
import { buscarArtistas, obtenerTopCancionesArtista, obtenerArtistasSimilares } from "./Axios/services/artistaService";
import { buscarCanciones, obtenerInfoCancion } from "./Axios/services/cancionService";

function App() {
  const [texto, setTexto] = useState("");
  const [tipoBusqueda, setTipoBusqueda] = useState("");
  const [datos, setDatos] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [similares, setSimilares] = useState([]);


  const funcionesDeBusqueda = {
    album: (texto) => buscarAlbumes(texto),
    artista: (texto) => buscarArtistas(texto), 
    cancion: (texto) => buscarCanciones(texto),
  };

  const buscarTipo = async (tipo) => {
    if (!texto.trim()) return;
    const listado = await funcionesDeBusqueda[tipo]?.(texto);
    setDatos(listado || []);
  };

  const funcionesDetalle = {
    album: (resultado) => obtenerInfoAlbum(resultado.artist, resultado.name),
    artista: (resultado) => obtenerTopCancionesArtista(resultado.name),
    cancion: (resultado) => obtenerInfoCancion(resultado.artist, resultado.name),
  };

  const funcionSimilar = {
    artista: (resultado) => obtenerArtistasSimilares(resultado.name),
  };

  const verDetalle = async (resultado) => {
    const detalle = await funcionesDetalle[tipoBusqueda]?.(resultado);
    setDetalle(detalle);

    const similar = await funcionSimilar[tipoBusqueda]?.(resultado);
      setSimilares(similar || []);
  };

  return (
    <>
      <div>
        <h1>Bibloteca de Musica</h1>
        <NavBar setTipoBusqueda={setTipoBusqueda} texto={texto} setTexto={setTexto} buscar={buscarTipo}
        />

        <h2> {tipoBusqueda && texto
          ? `Búsqueda de ${tipoBusqueda}: "${texto}"`
          : "Realizá una búsqueda"}
        </h2>

        <Lista datos={datos} tipoBusqueda={tipoBusqueda} accion={verDetalle} />

        <Detalle detalle={detalle} tipoBusqueda={tipoBusqueda} similares={similares}/>
      </div>
    </>
  );
}

export default App;