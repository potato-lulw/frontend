import { BrowserRouter, Routes, Route } from "react-router-dom";
import Glass from "./components/glass";
import BlobOverlay from "./components/blob";

function App() {
  return (
    <div className="App bg-primary text-primary min-h-[100vh] max-w-[100vw] padding-container relative md:py-10 py-5 items-center flex flex-col overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Glass/>}/>
        </Routes>
      </BrowserRouter>
      <BlobOverlay/>
      
      
    </div>
  );
}

export default App;
