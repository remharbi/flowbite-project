import { SideMenu } from "./components/SideMenu";
import { TopNavBar } from "./components/TopNavBar";
import { EmployeePage } from "./pages/EmployeePage";
function App() { 
  
  return (
    <div className="flex h-full font-display">
        <SideMenu />
      <div className="w-4/5 h-full">
        <TopNavBar />
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;
