import { Navbar, Container, Form, Button } from 'react-bootstrap';

function NavBar({ setTipoBusqueda, texto, setTexto, buscar }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 rounded">
      <Container>
        <Navbar.Brand>Biblioteca de Música</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex w-100 mt-2 mt-lg-0">
            <Form.Control
              type="text"
              placeholder="Buscar..."
              className="me-2"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
            
            <Button
              variant="outline-light"
              className="me-2"
              onClick={() => {
                setTipoBusqueda("cancion");
                buscar("cancion");
              }}
            >
              Buscar Canción
            </Button>
            
            <Button
              variant="outline-light"
              className="me-2"
              onClick={() => {
                setTipoBusqueda("artista");
                buscar("artista");
              }}
            >
              Buscar Artista
            </Button>
            
            <Button
              variant="outline-light"
              onClick={() => {
                setTipoBusqueda("album");
                buscar("album");
              }}
            >
              Buscar Álbum
            </Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;