import "./App.css";
import { Backdrop } from "./components/Backdrop/Backdrop";
import { NavBar } from "./components/NavBar/NavBar";
import { ModelProvider } from "./contexts/ModelContext";
import { CondorCoders } from "./sections/CondorCoders/CondorCoders";
import { Highlights } from "./sections/Highlights/Highlights";
import { History } from "./sections/History/History";
import { Profile } from "./sections/Profile/Profile";

function App() {
  return (
    <ModelProvider>
      <Backdrop />
      <NavBar />

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
