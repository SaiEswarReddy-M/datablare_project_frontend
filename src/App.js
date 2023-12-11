import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Components/Forms/Login';
import Register from './Components/Forms/Register';
import Home from './Components/Home';
import NavbarPage from './Components/NavbarPage';
import RequireAuth from './Components/RequireAuth';


function App() {

  return (
    <main className="App">
      <NavbarPage />
      <Routes>
        {/*protected route */} 
        {/* <Route 
        path="/home" 
        element={ <RequireAuth> <Home /> </RequireAuth> }
        /> */}
        <Route 
        path="/home" 
        element={ <Home />}
        />

        {/*public route */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </main>
  );
}

export default App;
