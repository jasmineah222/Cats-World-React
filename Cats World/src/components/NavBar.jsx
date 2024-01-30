import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllCats from './AllCats';
import SingleCat from './SingleCat';
import Compare from './Compare';

function NavBar() {

    const navigate = useNavigate()

return <menu>
    {
        <div className="navbar">
            <img id="icon" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fcute-cat-yoga-pose-cartoon-illustration_138676-2791.jpg&tbnid=PEZCw0vLR9JznM&vet=12ahUKEwjigZaNz4WEAxX1wckDHSUmAmgQMygCegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcartoon-cat&docid=eGdG146RZz3WHM&w=626&h=626&q=frree%20cat%20cartoon&ved=2ahUKEwjigZaNz4WEAxX1wckDHSUmAmgQMygCegQIARBU"/>
            <button className="nav" onClick={() => navigate(`/`)}>Home</button>
            <button className="nav" onClick={() => navigate(`/Compare`)}>Talking to Cats?</button>
        </div>

    }

    </menu>
}

export default NavBar;