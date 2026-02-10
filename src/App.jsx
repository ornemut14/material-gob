import Button from "./components/Button";
import UserplusIcon from "./components/Icons/usericons/userplusicon/userplusicon";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>

      {/* PRIMARY */}
      <Button variant="primary" size="medium">
        Primario
      </Button>

      <Button variant="primary" size="medium" icon>
        Primario + Icon
      </Button>


      {/* SECONDARY */}
      <Button variant="secondary" size="medium" primaryicon={<UserplusIcon />} seconda>
        Secundario
      </Button>

      <Button variant="secondary" size="medium" icon>
        Secundario + Icon
      </Button>


      {/* TEXT */}
      <Button variant="text" size="medium">
        Texto
      </Button>

      <Button variant="text" size="medium" icon>
        Texto + Icon
      </Button>


      {/* CUSTOM SIZE */}
      <Button
        variant="primary"
        width="220px"
        height="50px"
      >
        Custom Size
      </Button>

    </div>
  );
}

export default App;
