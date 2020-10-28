import React, {Component} from 'react';
import hamburger from '../hamburger.png';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            toggleShow: false
        }
    }

    toggleMenuFunc = () => {
        this.setState( prevState => {
            return {
                toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        return <header>
        <div>
            <img alt="logo" className="logo" src="https://www.logolynx.com/images/logolynx/8e/8e509cde090ec53ec7922159435b025a.png"/>
            <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                <ul>
                    <li>
                        <a href="http://lmgtfy.com">Home</a>
                    </li>
                    <li>
                        <a href="http://lmgtfy.com">About</a>
                    </li>
                    <li>
                        <a href="http://lmgtfy.com">Contact</a>
                    </li>
                </ul>
            </nav>
            <input alt="menu-icon" onClick={this.toggleMenuFunc} type="image" src={hamburger} id="nav-btn"/>
        </div>
    </header>
    }
}

export default Header;