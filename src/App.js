import React from "react";
import ExercisesProgress from "./pages/ExercisesProgress";

function App() {
  switch (window.location) {
    case "/exec": {
      return <ExercisesProgress />;
    }
  }
  return <ExercisesProgress />;
}

export default App;
