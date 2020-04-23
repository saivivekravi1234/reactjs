import React from 'react';
import LoginAdmin from './components/LoginAdmin'
import CollegeAdministration from './components/CollegeAdministration'
import StudentDetails from './components/StudentDetails'
import AddStudentRegistration from './components/AddStudentRegistration'
import EditPage from './components/EditPage'
import {Router, Route} from 'react-router-dom'
import history from './history'
import SearchBar from './components/SearchBar'
import View from'./components/View'
import './App.css'
function App() {
  return (
    <div className="App">

<Router history={history}>
      {/* <LoginAdmin/> */}
{/* <CollegeAdministration/> */}
{/* <StudentDetail/> */}
{/* <AddStudentRegistration/> */}
{/* <EditPage/> */}

<Route  exact path="/" component={LoginAdmin}/>
<Route path="/addstudents" component={AddStudentRegistration}/>
<Route path="/studentdetails" component={StudentDetails}/>
<Route path="/edit" component={EditPage}/>
{/* <Route path="/searchbyname"component={SearchBar}/> */}
<Route path="/viewdata" component={View}/>
</Router>
    </div>
  );
}

export default App;
