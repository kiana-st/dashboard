import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
import Header from './components/sidebar/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
