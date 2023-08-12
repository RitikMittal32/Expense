import './App.css';
import Home from './pages/home';
import Header from './components/header/header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Addexpense from './pages/add-expense/Addexpense';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path='/' element ={<Home />}/>
              <Route path='add-expense' element = {<Addexpense />} />
            </Routes>
            <Footer/>
          </div>
    </Router>
  );
}

export default App;
