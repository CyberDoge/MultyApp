import "./App.css";
import Progress from "./pages/Progress";
import ProgressTable from "./pages/ProgressTable";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Progress />
      <ProgressTable />
    </div>
  );
}

export default App;
