import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CMSDashboard from './components/CMSDashboard';
import LoginForm from './components/LoginForm';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/cms" component={CMSDashboard} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;