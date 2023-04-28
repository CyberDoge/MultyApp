import React from "react";
import ExercisesProgress from "./pages/ExercisesProgress";

function App() {
  console.log(window.location);
  switch (window.location) {
    case "/exec": {
      return <ExercisesProgress />;
    }
  }
  return <ExercisesProgress />;
}

export default App;
