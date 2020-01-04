
import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

export class NavBar extends React.Component {

    render(){
        return (
            <div className = 'navbar' >
            <nav>

                <div className = "navLogo" >
                    <p > Joey Tre' </p>              
                </div>  
                <ul>
                    <Link className = "link" to = "/news" >  <li>  NEWS </li> </Link >
                    <Link className = "link"  to = "/photos">  <li>  PHOTOS </li> </Link >
                    <Link className = "link" to = "/videos" >  <li> VIDEOS </li> </Link >           
                    <Link className = "link" to = "/music">  <li> MUSIC </li> </Link >
                    <Link className = "link" to = "/" > <li> HOME </li>  </Link >
                </ul> 
            </nav>   
        </div>   
        );
        }
}