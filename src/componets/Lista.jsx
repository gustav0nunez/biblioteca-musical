import { ListGroup, Button } from "react-bootstrap";

function Lista({ datos, tipoBusqueda, accion }) {
  return (
    <div className="mt-4">
      <ListGroup>
        {datos && datos.map((resultado, index) => (
          <ListGroup.Item 
            key={`${resultado.name}-${index}`}
            className="d-flex align-items-center justify-content-between bg-dark text-light border-secondary mb-2 rounded"
          >
            <div className="d-flex align-items-center">
              {resultado?.image?.[1]?.['#text'] && (
                <img 
                  src={resultado.image[1]['#text']} 
                  alt={resultado.name} 
                  className="rounded"
                  style={{ width: '50px', marginRight: '15px' }} 
                />
              )}
              
              <span>
                {tipoBusqueda == "album" && `${resultado.name} - ${resultado.artist}`}
                {tipoBusqueda == "artista" && resultado.name}
                {tipoBusqueda == "cancion" && `${resultado.name} - ${resultado.artist}`}
              </span>
            </div>

            <Button variant="outline-light" size="sm" onClick={() => accion(resultado)}>
              Ver detalle
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Lista;