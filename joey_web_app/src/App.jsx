import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Footer} from './components/footer/footer'
import {HomePageScreen} from './components/screens/homePage/homePage'
import {MusicScreen} from './components/screens/music/music'
import {VideosScreen} from './components/screens/videos/videos'
import {NavBar} from './components/navBar/navbar'
import {NewsScreen} from './components/screens/news/news'
import {PhotosScreen} from './components/screens/photos/photo'
function App() {
  return (
    <React.Fragment >
      <Router >
          <NavBar/>
          <Switch>
              <Route path = "/" exact component = { HomePageScreen }/>
              <Route path = "/music" exact component = { MusicScreen } /> 
              <Route path = "/videos" exact component = { VideosScreen }/> 
              <Route path = "/photos" exact component = {PhotosScreen}/>  
              <Route path = "/news" exact component = {NewsScreen}/>   
          </Switch > 
          <Footer/>
      </Router>   
  </React.Fragment >
  );
}

export default App;
