import logo from "./logo.svg";
import { Provider } from 'react-redux'
import "./App.css";
import AppButton from "./Bai10/components/Button";
import B2App from "./Bai9/BT2";
import Mycom from "./Bai12/Test";
import B12TH1 from "./Bai12/TH1";
import B12TH2 from "./Bai12/TH2";
import B12TH3 from "./Bai12/TH3";
import B12TH4 from "./Bai12/TH4";
import Testrouter from "./Bai14/Test";
import B14BT1 from "./Bai14/BT1";
import B14BT2 from "./Bai14/BT2";
import B15Test from "./Bai15/Test";
import TestForm from "./Bai15/Test/TestUseForm";
import SignupForm, { ValidationSchemaExample } from "./Bai15/Test/Testformik";
import B15BT1 from "./Bai15/BT1";
import B15BT2 from "./Bai15/BT2";
import { store } from "./Bai16/store";
import B16 from "./Bai16/test";
import B16BT1 from "./Bai16/BT1/App";
import B16BT2 from "./Bai16/BT2/App";
import B16TH1 from "./Bai16/TH1/App";
import B16TH2 from "./Bai16/TH2/App";
import B16TH3 from "./Bai16/TH3/App";
import B16TH4 from "./Bai16/TH4/App";

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

    // <div>
    //   <B15BT2 />
    // </div>

    // <Provider store={store}>
    <B16TH4 />
    // </Provider>
  );
}

export default App;
