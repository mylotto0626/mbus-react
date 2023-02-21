import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../src/components/main";
import ContactPage from "../src/components/contact";
// App.js 라우팅 구성하는 곳
function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>app테스트</h1> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
