import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return(
        <footer 
            class="
                px-14
                sm:px-20
                fixed w-full
                bottom-0
                sm:right-1/2
                sm:max-w-screen-sm
                transform sm:translate-x-1/2
                bg-white m-auto p-3 px-6 flex 
                justify-between border-t
            "
        >
            <span class="text-center text-lg"><a href="index.html"><i class="fas fa-home"></i><br /><span class="text-xs">Home</span></a></span>
            <span class="text-center text-lg"><a href="/"><i class="fas fa-store"></i><br /><span class="text-xs">Shop U.I</span></a></span>
            <span class="text-center text-lg"><a href="/"><i class="fas fa-box"></i><br /><span class="text-xs">Item</span></a></span>
            <span class="text-center text-lg"><a href="login.html"><i class="fas fa-user"></i><br /><span class="text-xs">My</span></a></span>
        </footer>
        )
    }
}

export default Footer;