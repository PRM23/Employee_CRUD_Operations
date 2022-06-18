import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import AddEmp from "./components/AddEmp";
import ListEmp from "./components/ListEmp";
import EditEmp from "./components/EditEmp";

function App() {
  return (
    <div className="App">
      {/* <AddEmp/> */}
      {/* <ListEmp /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<ListEmp />}></Route>
          <Route exact path="/addemployee" element={<AddEmp />}></Route>
          <Route exact path="/edit/:id" element={<EditEmp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
