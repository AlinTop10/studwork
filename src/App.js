import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Log from "./page/log";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper"> 
      {/* <Header />
      <Routes>
        <Route path="/" element={<Items />}/>
        <Route path="/login" element={<Log />}/>
      </Routes>
       <Footer />  */}
        <Log/>
    </div>
  );
}

export default App;
