import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";


function NavBar(){

    return (
        <nav className='NavBar'>
            <Link to = "/" className = "site-name">CW</Link>
            <ul>
                <CustomLink to = "/music" className = "NavLinks">MUSIC</CustomLink>
                <CustomLink to = "/projects" className = "NavLinks">PROJECTS</CustomLink>
                <CustomLink to = "/contact" className = "NavLinks">CONTACT</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}){

    const path = useResolvedPath(to)
    const isActive = useMatch({path: path.pathname, end: true})

    return (
        <li className = {isActive ? "active" : ""}>
            <Link to ={to} {...props}>{children}</Link>
        </li>
    );
}

export default NavBar