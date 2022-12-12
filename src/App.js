import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';




function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>  
      <Route path="signin" element={ <SignIn />} />      
      <Route path="/" element={ <Products />} />
      <Route path="CheckoutPage" element={ <CheckoutPage /> } />      
      </Routes> 
      </div>
  );  
}

export default App;
