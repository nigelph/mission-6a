import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home/Home"
import OrderHistory from './pages/OrderHistory/OrderHistory'
import Header from './global-components/Header/Header'
import Footer from "./global-components/Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/orders' element={<OrderHistory />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
