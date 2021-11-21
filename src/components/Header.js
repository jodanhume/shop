import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return(
        <header 
            class="
                fixed w-full z-40
                sm:right-1/2
                sm:max-w-screen-sm
                transform sm:translate-x-1/2
                bg-white m-auto p-3 px-6 flex 
                justify-between border-b
            "
        >
            <span id="toggleBtn"><button onClick={ this.props.toggleBtn } ><i class="fas fa-bars"></i></button></span>
            <span class="text-indigo-700 font-extrabold">{this.props.title}</span>
            <span><a href="index"><i class="fas fa-search"></i></a></span>
        </header>
        )
    }
}

export default Header;