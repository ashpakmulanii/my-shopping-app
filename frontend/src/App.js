import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HomeScreen } from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductScreen } from "./Screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
