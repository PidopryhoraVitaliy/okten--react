import './App.css'

const coursesTitleArray:string[] = [
  'JavaScript Complex',
  'Java Complex',
  'Python Complex',
  'QA Complex',
  'Fullstack',
  'Frontend'
];

function App() {
  return (
    <ul>
      {
        coursesTitleArray.map((title, index) => (<li key={index}>{title}</li>))
      }
    </ul>
  )
}

export default App
