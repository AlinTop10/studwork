
import Log from "./page/log";
import { Route, Routes } from "react-router-dom";
import Main from "./page/main";
import Mains from "./page/mains";

function App() {
  return (
    <Main/>
      // <Routes>
      //   <Route path="/" element={<Mains />}/>
      //   <Route path="/login" element={<Log />}/>
      //   <Route path="/reg" element={<Log />}/>
      // </Routes>
  );
}

export default App;
