import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path=":id" element={<Posts />}></Route>
    </Routes>
      </div>
    </Router>
  );
}

export default App;
