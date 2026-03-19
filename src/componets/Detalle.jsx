import { Card, ListGroup, Row, Col } from 'react-bootstrap';

function Detalle({ detalle, tipoBusqueda, similares, seleccionado }) {
  if (!detalle) return null;

  const vistas = {
    album: () => (
      <Card bg="dark" text="light" className="mt-4 p-4 border-secondary shadow">
        <Row>
          <Col md={4} className="text-center">
            {detalle?.image?.[1]?.['#text'] && (
              <img src={detalle.image[3]['#text']} alt={detalle?.name} className="img-fluid rounded mb-3" style={{ maxWidth: '250px' }} />
            )}
          </Col>
          <Col md={8}>
            <h3>Álbum: <span className="text-info">{detalle?.name || "Sin nombre"}</span></h3>
            <h5>Artista: {detalle?.artist?.name || detalle?.artist || "Desconocido"}</h5>
            <h5 className="mt-4">Canciones:</h5>
            <ListGroup variant="flush">
              {(detalle?.tracks?.track || []).map?.((cancion, index) => (
                <ListGroup.Item key={`${cancion?.name}-${index}`} className="bg-dark text-light border-secondary px-0">
                  {index + 1}. {cancion?.name || "Sin nombre"}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Card>
    ),

    artista: () => (
      <Card bg="dark" text="light" className="mt-4 p-4 border-secondary shadow">
        <Row>
          <Col md={4} className="text-center">
            {seleccionado?.image?.[2]?.['#text'] && (
              <img src={seleccionado.image[2]['#text']} alt={seleccionado?.name} className="img-fluid rounded mb-3" style={{ maxWidth: '250px' }} />
            )}
            <h3 className="text-info mt-2">{seleccionado?.name || "Artista"}</h3>
          </Col>
          <Col md={8}>
            <h5>Top Canciones:</h5>
            <ListGroup variant="flush" className="mb-4">
              {(detalle || []).map?.((cancion, index) => (
                <ListGroup.Item key={`${cancion?.name}-${index}`} className="bg-dark text-light border-secondary px-0">
                  {index + 1}. {cancion?.name || "Sin nombre"}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <h5>Artistas Similares:</h5>
            <ListGroup variant="flush">
              {(similares || []).map((artista, index) => (
                <ListGroup.Item key={`${artista?.name}-${index}`} className="bg-dark text-light border-secondary px-0">
                  - {artista?.name || "Sin nombre"}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Card>
    ),

    cancion: () => (
      <Card bg="dark" text="light" className="mt-4 p-4 border-secondary shadow text-center">
        <Card.Body>
          {detalle?.album?.image?.[1]?.['#text'] && (
            <img src={detalle.album.image[1]['#text']} alt={detalle?.name} className="img-fluid rounded mb-4 shadow" style={{ maxWidth: '250px' }} />
          )}
          <h3><span className="text-info">{detalle?.name || "Sin nombre"}</span></h3>
          <h5>Artista: {detalle?.artist?.name || "Desconocido"}</h5>
          <p className="text-secondary mt-2">Álbum: {detalle?.album?.title || "No disponible"}</p>
        </Card.Body>
      </Card>
    ),
  };

  return vistas[tipoBusqueda]?.() || null;
}

export default Detalle;