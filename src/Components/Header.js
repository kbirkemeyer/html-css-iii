import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return <header>
        <div>
            <img class="logo" src="https://www.logolynx.com/images/logolynx/8e/8e509cde090ec53ec7922159435b025a.png"/>
            <nav class="nav-bar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <button id="nav-btn"></button>
        </div>
    </header>
    }
}

export default Header;