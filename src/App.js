import './App.css';
import CheckoutPage from './components/CheckoutPage';
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
      <Route index element={ <Products />} />          
      <Route path="CheckoutPage" element={ <CheckoutPage /> } />
      </Route>
      <Route path="SignIn">  
      <Route index element={ <SignIn />} />      
      <Route path="SignUp" element={ <SignUp />} />
      </Route>            
      </Routes> 
      </div>
  );  
}

export default App;
