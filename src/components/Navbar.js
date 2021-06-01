import React, { Component } from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight, FaCentercode} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        {/* {<a href="url">Jayananda Estate Villa</a>} */}
                        <h4>Jayananda State Villa</h4>
                        {/* { <img src={logo} alt="Jayananda Estate Villa"></img>} */}
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon"></FaAlignRight>
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-linksshow-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="">Reception Hall</Link>
                    </li>
                    <li>
                        <Link to="">DayOut</Link>
                    </li>
                    <li>
                        <Link to="">LogIn</Link>
                    </li>
                </ul>
            </div>
        </nav>    

        
    )    
    }
}
