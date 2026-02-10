import Button from "./components/Button";


function App() {
  return (
    <div style={{ padding: "40px" }}>

      <h2>Small</h2>

      <Button size="small" variant="primary">
        Primario
      </Button>

      <Button size="small" variant="secondary">
        Secundario
      </Button>

      <Button size="small" variant="text">
        Texto
      </Button>

      <h2 style={{ marginTop: "30px" }}>Medium</h2>

      <Button size="medium" variant="primary" icon>
        Botón
      </Button>

      <Button size="medium" variant="secondary" icon>
        Botón
      </Button>

      <Button size="medium" variant="text">
        Texto
      </Button>

      <h2 style={{ marginTop: "30px" }}>Disabled</h2>

      <Button disabled>
        Deshabilitado
      </Button>

    </div>
  );
}

export default App;
