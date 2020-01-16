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
import {AdminPage} from './components/adminPage/adminPage'
import backgroundPic from '../src/media/Chicago.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './components/navBar/testBar'
function App() {
  return (
    <React.Fragment >
      <section style = {{ backgroundImage: `url(${backgroundPic})`}}>
        <Router>
            <NavigationBar/>
            <Switch>
                <Route path = "/" exact component = { HomePageScreen }/>
                <Route path = "/music" exact component = { MusicScreen } /> 
                <Route path = "/videos" exact component = { VideosScreen }/> 
                <Route path = "/photos" exact component = {PhotosScreen}/>  
                <Route path = "/news" exact component = {NewsScreen}/>   
                <Route path = "/admin" exact component = {AdminPage}/>  
            </Switch >
            <Footer/>
        </Router>
      </section>   
  </React.Fragment >
  );
}

export default App;
