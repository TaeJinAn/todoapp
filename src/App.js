import { NavLink, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <>
      <header className="flex gap-2">
        <NavLink to="/list" className="p-5 hover:text-red-500 font-bold">List</NavLink>
        <NavLink to="/write" className="p-5 hover:text-red-500 font-bold">Write</NavLink>
      </header>
      <div className="App">
        <Routes>
          <Route path="/list" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
