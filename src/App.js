import "./App.css";

import FaceRecognition from "components/FaceRecognition";
import Navigation from "components/Navigation";
import ImageLinkForm from "components/ImageLinkForm";
import Rank from "components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";

import { detect } from "faceRecognitionAPI";

function App() {
  const [url, setURL] = useState("");

  const onDetect = (url) => {
    detect(url)
      .then((res) => {
        const boxes = res.outputs[0].data.regions.map(
          (region) => region.region_info.bounding_box
        );
        console.log("RESULT", boxes);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="app">
      <ParticlesBg color="#ffffff" bg={true} num={42} type="cobweb" />
      <Navigation />
      <Rank />
      <ImageLinkForm onChange={setURL} onDetect={onDetect} />
      <FaceRecognition imageURL={url} />
    </div>
  );
}

export default App;
