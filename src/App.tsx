import "./App.css";
import { Content } from "./components/Content/Content";
import { Scene } from "./components/Scene/Scene";
import { ModelProvider } from "./contexts/ModelContext";

function App() {
  return (
    <ModelProvider>
      <div className="backdrop">
        <Scene />
      </div>
      <Content />
    </ModelProvider>
  );
}

export default App;
