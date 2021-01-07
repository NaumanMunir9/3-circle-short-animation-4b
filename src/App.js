import { TweenMax, Power3 } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let app = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let circleYellow = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    TweenMax.staggerFrom(
      [circleRed, circleBlue, circleYellow],
      0.8,
      {
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
        delay: 0.4,
      },
      0.2
    );
  }, []);

  const [state, setState] = useState(false);

  const expandBlueCircle = () => {
    TweenMax.to(circleBlue, 0.8, {
      height: 200,
      width: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const expandRedCircle = () => {
    TweenMax.to(circleRed, 0.8, {
      height: 200,
      width: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const expandYellowCircle = () => {
    TweenMax.to(circleYellow, 0.8, {
      height: 200,
      width: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const shrinkBlueCircle = () => {
    TweenMax.to(circleBlue, 0.8, {
      height: 75,
      width: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  const shrinkRedCircle = () => {
    TweenMax.to(circleRed, 0.8, {
      height: 75,
      width: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  const shrinkYellowCircle = () => {
    TweenMax.to(circleYellow, 0.8, {
      height: 75,
      width: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  return (
    <div ref={(el) => (app = el)} className="app">
      <div className="app-container">
        <div className="circles-container">
          <div
            onClick={state !== true ? expandRedCircle : shrinkRedCircle}
            ref={(el) => (circleRed = el)}
            className="circle red"
          ></div>
          <div
            onClick={state !== true ? expandBlueCircle : shrinkBlueCircle}
            ref={(el) => (circleBlue = el)}
            className="circle blue"
          ></div>
          <div
            onClick={state !== true ? expandYellowCircle : shrinkYellowCircle}
            ref={(el) => (circleYellow = el)}
            className="circle yellow"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
