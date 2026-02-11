import Button from "./components/Button";
import UserplusIcon from "./components/Icons/usericons/userplusicon/userplusicon";
import MainCard from "./components/maincard/maincard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <MainCard items={["Trabajo", "Televisores"]} itemscolor="light" />

    </div>
  );
}

export default App;
