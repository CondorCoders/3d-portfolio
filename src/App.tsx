import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Scene } from "./components/Scene/Scene";
import { ModelProvider } from "./contexts/ModelContext";
import { CondorCoders } from "./sections/CondorCoders/CondorCoders";
import { Highlights } from "./sections/Highlights/Highlights";
import { History } from "./sections/History/History";
import { Profile } from "./sections/Profile/Profile";

function App() {
  return (
    <ModelProvider>
      <NavBar />
      <div className="backdrop">
        <Scene />
      </div>
      <>
        <Profile />
        <History />
        <Highlights />
        <CondorCoders />
      </>
    </ModelProvider>
  );
}

export default App;
