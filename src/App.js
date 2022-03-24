import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import List from "./component/list";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route element={<Login />} path='/'></Route>
      <Route element={<List />} path='/list'></Route>
      <Route element={<List />} path='*'></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
