import './App.css'
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";

function App() {
  return (
    <div className="app-wrapper">
      <LeftBranch/>
      <RightBranch/>
    </div>
  )
}

export default App
