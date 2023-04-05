import logo from "./logo.svg";
import "./App.css";
import AppButton from "./Bai10/components/Button";
import B2App from "./Bai9/BT2";

function App() {
  //   const ismessage = true
  //   const message = "Hello world"
  //   const todos = ["learn reactjs","kganekag"]

  //   const handleClick = (name) =>{
  //     console.log(22,name);
  //   }
  // function handleSubmit(e) {
  //         e.preventDefault();    console.log('You clicked submit.');
  //       }

  return (
    // <div className="App">
    //   {ismessage ? message : "ABC"}
    //   {todos.map((todo,index) =>{
    //     return <p key={index}>{todo}</p>
    //   })}
    //   <HelloWorld name={message}/>
    //   <button onClick={()=> handleClick('abc')}>Click me</button>
    // </div>

    //   <form onSubmit={handleSubmit}>
    //     <button type="submit">Submit</button>
    //   </form>

    <div>
      <B2App />
    </div>
  );
}

export default App;
