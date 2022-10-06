import "./App.css";
import EnhancedTable from "./components/EnhancedTable";
import MenuSideBar from "./components/MenuSideBar";
import OverviewPanel from "./components/OverviewPanel";

function App() {
  return (
    <div className="App">

      <MenuSideBar />
      <OverviewPanel />
      <EnhancedTable />
    </div>
  );
}

export default App;
