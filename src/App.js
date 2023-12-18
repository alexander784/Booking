import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import list from "./pages/list/list";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hotels" element={<list/>}/>
    <Route path="/hotels/:id" element={<list/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
