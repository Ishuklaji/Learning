import Folder from "./components/Folder";
import "./styles.css";
import explorer from "./data/folderData";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
