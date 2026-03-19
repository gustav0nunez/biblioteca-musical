import Boton from "./Boton";
import Input from "./Input";

function NavBar({ setTipoBusqueda, texto, setTexto, buscar }) {
  return (
    <div>
      <Input valor={texto} setValor={setTexto} />

      <Boton
        texto="Buscar Canción"
        accion={() => {
          setTipoBusqueda("cancion");
          buscar("cancion");
        }}
      />

      <Boton
        texto="Buscar Artista"
        accion={() => {
          setTipoBusqueda("artista");
          buscar("artista");
        }}
      />

      <Boton
        texto="Buscar Álbum"
        accion={() => {
          setTipoBusqueda("album");
          buscar("album");
        }}
      />
    </div>
  );
}

export default NavBar;