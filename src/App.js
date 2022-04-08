import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
