import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HomeScreen } from "./Screens/HomeScreen";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeScreen />
      </main>

      <Footer />
    </div>
  );
}

export default App;
