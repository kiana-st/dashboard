import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/sidebar/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
