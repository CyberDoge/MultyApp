import React from "react";
import ExercisesProgress from "./pages/ExercisesProgress";
import Finance from "./pages/Finance";

function App() {
  console.log(window.location);
  switch (window.location.pathname) {
    case "/exec": {
      return <ExercisesProgress />;
    }
  }
  return <Finance />;
}

export default App;
