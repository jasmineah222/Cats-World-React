import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/icon.png'; // Tell webpack this JS file uses this image
import AllCats from './AllCats';
import SingleCat from './SingleCat';
import Compare from './Compare';

function NavBar() {

    const navigate = useNavigate()

return <>
    {
        <div className="navbar">
            <img id="icon" src={logo}/>
            <button className="nav" onClick={() => navigate(`/`)}>Home</button>
            <button className="nav" onClick={() => navigate(`/Compare`)}>Talking to Cats?</button>
        </div>

    }

    </>
}

export default NavBar;