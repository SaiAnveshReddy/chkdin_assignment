import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookLists from "./pages/booklist";
import Form1 from "./pages/form";

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/form/" element={<Form1 />}></Route>
          <Route path="/form/:id" element={<Form1 />}></Route>
          <Route path="/" element={<BookLists />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
