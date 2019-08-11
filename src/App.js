import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const nextProgress = progress + 0.05;
      if (nextProgress > 1) {
        return;
      }

      setProgress(nextProgress);
    }, 1000);
  });

  const position = Math.min(progress, 1);
  const complete = position === 1;
  const notMoved = position === 0;

  const DIAMETER = 50;
  const STROKE_WIDTH = 6;
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = Math.PI * RADIUS * 2;

  return (
    <div className="App">
      <div
        className="wrapper"
        style={{
          backgroundColor: complete ? "tomato" : "#FFF",
        }}
      >
        <svg viewBox="0 0 50 50" width="100%" height="100%" className="circle-progress">
          <circle
            className="progress"
            cx={DIAMETER / 2}
            cy={DIAMETER / 2}
            r={RADIUS}
            stroke={notMoved ? "transparent" : "tomato"}
            fill="transparent"
            strokeWidth={STROKE_WIDTH}
            style={{
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: CIRCUMFERENCE * (1 - position),
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
