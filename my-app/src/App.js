import "./App.css"
import NavBar from "../src/Component/Navbar"
import AddUser from "./Component/addUser";
import AllUser from "./Component/AllUser";
import CodeForInterview from "./Component/CodeforInterview";
import EditUser from "./Component/EditUser";
import { BrowserRouter,Route,Routes } from "react-router-dom";


const App=()=> {
  return (
        
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/all" element={<AllUser/>}/>
      <Route path="/" element={<CodeForInterview/>}/>
      <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>
      
      

  );
}

export default App;
 