import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/uikit/dist/js/uikit.min.js";
import "../node_modules/uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "./index.css";
import Snowfall from "react-snowfall";
import dub3 from "./images/final.png"

const snowflake3 = document.createElement("img");
snowflake3.src = dub3;

const images = [ snowflake3];

UIkit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: "#282c34" }}>
      <Snowfall
        snowflakeCount={50}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
        speed={[0.1, 0.3]}
        wind={[-0.5,1.0]}
      />
      <Snowfall
        snowflakeCount={1}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
        images={images}
        radius={[20.0, 30.0]}
        speed={[0.1, 0.3]}
        wind={[-0.5,1.0]}
      />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
