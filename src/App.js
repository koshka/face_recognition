import "./App.css";
import Navigation from "components/Navigation";
import Logo from "components/Logo";
import ImageLinkForm from "components/ImageLinkForm";
import Rank from "components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="app">
      <ParticlesBg color="#ffffff" bg={true} num={42} type="cobweb" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
