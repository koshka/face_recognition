import "./App.css";
import Navigation from "components/Navigation";
import ImageLinkForm from "components/ImageLinkForm";
import Rank from "components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="app">
      <ParticlesBg color="#ffffff" bg={true} num={42} type="cobweb" />
      <Navigation />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
