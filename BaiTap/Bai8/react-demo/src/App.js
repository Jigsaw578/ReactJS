import logo from './logo.svg';
import './App.css';

function App() {
  const ismessage = true
  const message = "Hello world"
  const todos = ["learn reactjs","kganekag"]
  return (
    <div className="App">
      {ismessage ? message : "ABC"}
      {todos.map((todo,index) =>{
        return <p key={index}>{todo}</p>
      })}
    </div>
  );
}

export default App;
