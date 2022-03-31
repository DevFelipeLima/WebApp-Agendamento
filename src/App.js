
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contacts';
import Footer from './components/Footer/Footer';
import Galery from './components/Galery/Galery';

function App() {
  return (
    <Router>
      <Home />
      <Galery />
      <Contact />

      <Footer />
    </Router>
  );
}

export default App;
