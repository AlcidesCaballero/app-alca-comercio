import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Layout from './components/Layout';




function App() {
  return (
    
    <div className="App">
      
      <Routes>     
      <Route path="/" element={ <Layout />}>
      <Route path="/" element={ <Products />} />
      <Route path="signin" element={ <SignIn />} />      
      <Route path="signup" element={ <SignUp />} />      
      <Route path="CheckoutPage" element={ <CheckoutPage /> } />
      </Route>            
      </Routes> 
      </div>
  );  
}

export default App;
