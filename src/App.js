import './App.css';
import Home from './components/home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 



export default function App() {
  return (
    <Router>

      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

    </Router>
  )
}

