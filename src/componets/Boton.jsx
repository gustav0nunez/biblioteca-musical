function Boton({ texto, accion }) {

    return (
        
        <button onClick={accion}>
            {texto}
        </button>

    );

}

export default Boton;