import NavBar from "./components/layout/NavBar";
import Welcome from "./components/layout/Welcome";
import Footer from "./components/layout/Footer";
import Projects from "./components/layout/Projects";
import SocialMedia from "./components/layout/SocialMedia";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />

      <Projects />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
