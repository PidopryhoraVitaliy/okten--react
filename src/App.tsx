import './App.css'
import {coursesAndDurationArray} from "./data/coursesList.ts";

function App() {
  return (
    <>
      {
        coursesAndDurationArray.map((item, i) =>
          <p key={i}> {item.title} </p>
        )
      }
    </>
  )
}

export default App
