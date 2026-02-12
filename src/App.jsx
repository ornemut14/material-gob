import { useState } from "react";
import Button from "./components/Button";
import UserplusIcon from "./components/Icons/usericons/userplusicon/userplusicon";
import MainCard from "./components/maincard/maincard";
import Menu from "./components/menu/menu";
import MenuOption from "./components/menu/menuoptions/menuoption";
import GobIcon from "./components/Icons/gobicon/gobicon";

function App() {

  const [ismenuopen, setIsmenuopen] = useState(false)

  const handleMenuToggle = () =>{
    if(ismenuopen){
      setIsmenuopen(false)
    }else{
      setIsmenuopen(true)
    }
  }

  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <MainCard items={["Trabajo", "Televisores"]} itemscolor="light" />
      <Menu isopen={ismenuopen} axis="horizontal">
        <MenuOption icon={<UserplusIcon variant="white"/>} text="consulta y Solicitudes" onclick={() => alert("hola")} variant={1} />
        <MenuOption icon={<UserplusIcon variant="white"/>} text="consulta y Solicitudes" onclick={() => alert("hola")} variant={1} />
        <MenuOption icon={<UserplusIcon variant="white"/>} text="consulta y Solicitudes" onclick={() => alert("hola")} variant={1} />
      </Menu>
      <Button onClick={() => handleMenuToggle()}>Hola</Button>
      <GobIcon name="notebook" variant="black" />

    </div>
  );
}

export default App;
