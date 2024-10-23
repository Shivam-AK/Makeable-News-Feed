import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* <Route
          path='/*'
          element={
            <>
              <Routes>
                <Route path='/model' element={<Model />} />
              </Routes>
            </>
          }
        /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
