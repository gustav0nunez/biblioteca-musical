function Detalle({ detalle, tipoBusqueda, similares }) {
  if (!detalle) return null;

  const vistas = {
    album: () => (
      <div>
        <h3>Álbum</h3>
        <p>Nombre: {detalle?.name || "Sin nombre"}</p>
        <p>Artista: {detalle?.artist?.name || detalle?.artist || "Desconocido"}</p>

        <p>Canciones:</p>
        <ul>
          {(detalle?.tracks?.track || []).map?.((cancion) => (
            <li
              key={`${cancion?.name}-${cancion?.artist?.name}`}
            >
              {cancion?.name || "Sin nombre"}
            </li>
          ))}
        </ul>
      </div>
    ),

    artista: () => (
      <div>
        <h3>Artista</h3>

        <p>Top canciones:</p>
        <ul>
          {(detalle || []).map?.((cancion) => (
            <li
              key={`${cancion?.name}-${cancion?.artist?.name}`}
            >
              {cancion?.name || "Sin nombre"}
            </li>
          ))}
        </ul>

        <p>Artistas similares:</p>
        <ul>
          {(similares || []).map((artista) => (
            <li key={`${artista?.name}`}>
              {artista?.name || "Sin nombre"}
            </li>
          ))}
        </ul>
      </div>
    ),

    cancion: () => (
      <div>
        <h3>Canción</h3>
        <p>Nombre: {detalle?.name || "Sin nombre"}</p>
        <p>Artista: {detalle?.artist?.name || "Desconocido"}</p>
        <p>Álbum: {detalle?.album?.title || "No disponible"}</p>
      </div>
    ),
  };

  return vistas[tipoBusqueda]?.() || null;
}

export default Detalle;