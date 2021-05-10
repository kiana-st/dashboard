import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';
import Manager from './pages/Manager';
import Reports from './pages/Reports';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/application" component={Application}/>
          <Route path="/manager" component={Manager}/>
          <Route path="/reports" component={Reports}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
