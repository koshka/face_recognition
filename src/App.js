import "./App.scss";

import FaceRecognition from "components/FaceRecognition";
import Navigation from "components/Navigation";
import ImageLinkForm from "components/ImageLinkForm";
import Rank from "components/Rank/Rank";
import ParticlesBg from "particles-bg";
import SignIn from "components/SignIn";
import { useState } from "react";

import { detect } from "faceRecognitionAPI";

function App() {
  const [url, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [boxes, setBoxes] = useState([]);

  const isURLEmpty = url == null || url === "";

  const onDetect = () => {
    if (isURLEmpty) {
      return;
    }
    setIsLoading(true);
    detect(url)
      .then((res) => {
        const boxes = res.outputs[0].data.regions.map(
          (region) => region.region_info.bounding_box
        );
        setBoxes(boxes);
        console.log("RESULT", boxes);
      })
      .catch((err) => {
        setBoxes([]);
        console.log("err", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="app">
      <ParticlesBg color="#ffffff" bg={true} num={42} type="cobweb" />
      <Navigation />
      <SignIn />
      <Rank />
      <ImageLinkForm
        isLoading={isLoading}
        onChange={(newURL) => {
          setURL(newURL);
          setBoxes([]);
        }}
        onDetect={onDetect}
        value={url}
      />
      <FaceRecognition boxes={boxes} imageURL={url} />
    </div>
  );
}

export default App;
