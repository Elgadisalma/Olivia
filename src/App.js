import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home'
import Contact from './components/contact'
import Footer from './components/footer'


export default function App() {

  const [pointer,setPointer] = useState(8);
  
  return (
    <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  </Router>
  )
}

