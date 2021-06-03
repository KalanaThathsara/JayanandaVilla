import React, { Component } from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight, FaCentercode} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import jwtDecode from 'jwt-decode'

export default class Navbar extends Component {

    state={
        isOpen:false,
        username: ''
    }

    

    // componentDidMount = () => {
    //     // Typical usage (don't forget to compare props):
    //     try{
    //         const jwt = localStorage.getItem('token')
    //         const usern = jwtDecode(jwt).name.split(' ')[0]
    //         console.log(usern)
    //         this.setState({
    //             username: usern
    //         })
    //         console.log(this.state.username)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    //   }

    
    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const jwt = localStorage.getItem('token')
        let usern = jwt && jwtDecode(jwt).name.split(' ')[0]
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
                        <Link to="/user/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="">ReceptionHall</Link>
                    </li>
                    <li>
                        <Link to="">DayOut</Link>
                    </li>
                    <li>
                        <Link to="">Gallery</Link>
                    </li>
                    { usern ?  
                        <li>
                            <Link>{usern}</Link>
                        </li> :
                    <>
                        <li>
                            <Link to="/user/login">LogIn</Link>
                        </li>
                        <li>
                            <Link to="/user/register">Register</Link>
                        </li>
                    </>
                        
                    }
                </ul>
            </div>
        </nav>    

        
    )    
    }
}
