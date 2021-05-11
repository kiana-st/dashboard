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
          {/* <Route path="/" component={Dashboard} exact/>
          <Route path="/application" component={Application}/> */}
          {/* <Route path="/application/allApp" component={Application}/>
          <Route path="/application/myapp" component={Myapp}/> */}

          {/* <Route path="/manager" component={Manager}/> */}
          {/* <Route path="/manager/mypincode" component={MypinCode}/>
          <Route path="/manager/myhardware" component={HardWare}/> */}

          {/* <Route path="/reports" component={Reports}/> */}
          {/* <Route path="/reports/reportPills" component={ReportPills}/>
          <Route path="/reports/tickets" component={Tickets}/>
          <Route path="/reports/myprofile" component={MyProfile}/> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
