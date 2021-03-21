import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/header';
import video from './Components/video';
import otherGames from './Components/otherGames';
import reportWebVitals from './reportWebVitals';
import Game from './Components/Game';

ReactDOM.render(
  <React.StrictMode>
        <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route path="/video" component={video} />
        <Route path="/otherGames" component={otherGames} />
        
      </Switch>
    </Router>
    

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
